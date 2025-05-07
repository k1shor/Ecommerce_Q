const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    category_name: {
        type: String,
        required: true,
        unique: true,
        trim : true
    },

    description: {
        type: String,
        required: true,
        trim : true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    
    image: {
        type: String,
        required: true,
        trim : true
    },

}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);
       