const express = require('express');
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name should not be blank"]
    },
    price: {
        type: Number,
        required: true
    },
    features: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 4
    },
    company: {
        type: String,
        enum: {
            values: ["BMW", "MARUTI", "HUNDAI", "TATA"]
        }

    }
}, {timestamps: true});



const Product = new mongoose.model('Product', productSchema);
module.exports = Product;