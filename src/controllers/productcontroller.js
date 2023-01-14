const Product = require('../models/productmodel');

//fetch all products
const fetch_all_product = async (req, res) => {
    try {
        const fetchAllProduct = await Product.find({});
        res.status(200).send(fetchAllProduct);
    } catch (err) {
        res.status(400).send(err);
    }
}

//fetch single product
const fetch_single_product = async (req, res) => {
    try {
        const _id = req.params.id;
        const fetchSingleProduct = await Product.findById(_id);
        console.log(fetchSingleProduct)
        res.status(200).send(fetchSingleProduct);
    } catch (err) {
        res.status(400).send(err);
    }
}




//Query
const fetch_all_query = async (req, res) => {
    try {
        const { company, name, sort, select } = req.query;
        const productObj = {};
        if (company) {
            productObj.company = company;
        }

        if (name) {
            productObj.name = { $regex: name, $options: "i" };
        }

        let apiData = Product.find(productObj);
        if (sort) {
            let sortFix = sort.replace(",", " ");
            apiData = apiData.sort(sortFix);
        }

        if (select) {
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 5;
        let skip = (page - 1) * limit;

        apiData = apiData.skip(skip).limit(limit);

        const fetchAllProduct = await Product.find(apiData);
        res.status(200).send(fetchAllProduct);
    } catch (err) {
        res.status(400).send(err);
    }
}




module.exports = { fetch_all_product, fetch_single_product, fetch_all_query };

