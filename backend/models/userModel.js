const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        required: true,
        default: 0
    },
    isVerified:{
        type: Boolean,
        default: false
    }
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)