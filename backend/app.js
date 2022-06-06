const express = require("express");
const productController = require("./controllers/productController");

const app = express();

app.use(express.json());

app.use("/api/v1/product", productController);
module.exports = app;
