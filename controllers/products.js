const Product = require("../models/product");


let getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, products })
    } catch (error) {
        res.status(500).json({ success: false, msg: '[Error] :' + error.message })
    }

}

let getProductById = async (req, res) => {
   try {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ success: false, msg: 'No product found' })
    }
    res.status(200).json({ success: true, product })
   } catch (error) {
    res.status(500).json({ success: false, msg: '[Error] :' + error.message })
}
}

let createProduct = async (req, res) => {
    try {
        if (!req.body.name || req.body.name.length < 3) {
            return res.status(400).json({ success: false, msg: 'Product name must be at least 3 characters' })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: '[Error] :' + error.message })
    }
}
let deleteProductById = async (req, res) => {
    try {
        const { id: productID } = req.params;
        const product  = await Product.findOneAndDelete({ _id: productID });
        if (!product) {
            return res.status(404).json({ success: false, msg: `No product with id: ${productID}` })
        }
        res.status(200).json({ success: true, msg: 'Product deleted' })
    } catch (error) {
        res.status(500).json({ success: false, msg: '[Error] :' + error.message })
    }
}

let updateProductById = async (req, res) => {
    try {
        const { id: productID } = req.params;
        const product = await Product.findOneAndUpdate({ _id: productID }, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ success: false, msg: `No product with id: ${productID}` })
        }
        res.status(200).json({ success: true, product })
    } catch (error) {
        res.status(500).json({ success: false, msg: '[Error] :' + error.message })
    }
}




module.exports = { getAllProducts, getProductById , createProduct, deleteProductById, updateProductById}

