const Product = require('./src/models/productmodel');
const ProductJson = require("./product.json");
const mongoose = require('mongoose');
const conn = mongoose.connect("mongodb://localhost:27017/motihari", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    Product.deleteMany();
    Product.create(ProductJson);
    console.log("Success");
}).catch((err) => {
    console.log(err);
})