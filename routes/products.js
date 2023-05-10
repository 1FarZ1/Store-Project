const express = require("express")

const productRouter = express.Router();

const { getAllProducts, getProductById, createProduct , deleteProductById , updateProductById, getAllProductsFeatured} = require("../controllers/products")

productRouter.route("/").get(getAllProducts).post(createProduct)
productRouter.route("/featured").get(getAllProductsFeatured)
productRouter.route("/:id").get(getProductById).delete(deleteProductById).patch(updateProductById)

module.exports = productRouter;