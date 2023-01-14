const express = require('express');
const productRouter = express.Router();
const queryController = require('../controllers/productcontroller');


// productRouter.get("/product", queryController.fetch_all_product);
productRouter.get("/product/:id", queryController.fetch_single_product);
productRouter.get("/product", queryController.fetch_all_query);


module.exports = productRouter;