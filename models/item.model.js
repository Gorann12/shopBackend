const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 25,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    }
}, {
    timestamps: { createdAt: true, updatedAt: false }
})

itemSchema.pre('remove', function(next) {
    // Find all items in lists and remove them from there
    console.log("removed")
    next();
})

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;