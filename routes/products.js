const express = require("express")

const productRouter = express.Router();

const { getAllProducts, getProductById } = require("../controllers/products")

// productRouter.route("/").get(getAllProducts)
// productRouter.route("/:id").get(getProductById)

module.exports = productRouter;