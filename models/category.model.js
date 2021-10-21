const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 25
    },
    description: {
        type: String,
        maxLength: 255,
        default: ''
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;