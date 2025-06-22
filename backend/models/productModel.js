const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  product_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  product_description: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  stock: {
    type: Number,
    require: true,
    min: 0,
  },
  
  image: {
    data: Buffer,
    contentType: String,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },

  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },

  slug: {
    type: String,
  },
}, { timestamps: true });


productSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.product_name, { lower: true });
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
