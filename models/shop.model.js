const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 25
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
        maxLength: 100
    }
})

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;