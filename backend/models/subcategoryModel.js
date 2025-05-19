const mongoose = require ('mongoose');
const slugify = require('slugify');

const subcategorySchema = new mongoose.Schema({
    subcategory_name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },

    slug: {
        type: String,
        unique: true,
        index: true
    },

    description: {
        type: String,
        required: false,
        trim : true
    },
    
    image: {
        type: String,
        required: false,
        trim : true
    }
}, {timestamps: true});

        subcategorySchema.pre('save',function(next){

            this.slug = slugify(this.subcategory_name);
            next();
        });

        module.exports = mongoose.model('Subcategory', subcategorySchema);