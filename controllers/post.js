
let products = require("../dummyDatabase");

const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({
            data: products
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
}

const getProduct = async (req, res) => {
    let { tag } = req.params;
    try {
        let product = products.find(product => product.tag === tag);
        res.status(200).json({
            data: product
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
}



module.exports = {
    getAllProducts,
    getProduct
}