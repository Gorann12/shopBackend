const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 35,
        required: true,
        unique: true
    },
    items: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Item'
        }
    ],
    shop: {
        type: mongoose.Types.ObjectId,
        ref: 'Shop',
        required: true
    }
}, {
    timestamps: true
})

const List = mongoose.model('List', listSchema);
module.exports = List;