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

//Create Schema
const AddressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    line1: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    recipient_name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

//Create Schema
const CompletedOrderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    address: {
        type: AddressSchema,
        required: true
    },
    items: {
        type: [ItemSchema],
        required: true
    }
});

module.exports = CompletedOrder = mongoose.model("completedOrder", CompletedOrderSchema);