const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    color: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    inCart: {
        type: Boolean,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);