const Product = require("../model/product")
const getAllProducts = async (req, res) => {
    // console.log(req.query);
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "e" };;
    }
    let apiData = Product.find(queryObject);

    if (sort) {
        let sortfix = sort.replace(",", " ");
        apiData = apiData.sort(sortfix);
    }

    if (select) {
        // let selectfix = select.replace(",", " ");
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject.company);

    const Products = await apiData;
    res.status(200).json({ Products, nbHits: Products.length })
};
const getAllProductsTesting = async (req, res) => {
    const Products = await Product.find(req.query).select('name company').skip(2);
    // sort = name  price;
    res.status(200).json({ Products, bnHits: Products.length })
};

module.exports = { getAllProducts, getAllProductsTesting }
