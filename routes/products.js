const express = require("express")

const productRouter = express.Router();

const { getAllProducts, getProductById } = require("../controllers/products")

productRouter.route("/").get(getAllProducts).post(createProduct)
productRouter.route("/:id").get(getProductById).delete(deleteProductById)

module.exports = productRouter;