const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();

router.get("/:results/:page/:sort/:filter", async function (req, res) {
  let page = req.params.page || 1;
//   let sort = req.params.sort || "asc";
  let filter = req.params.filter || "all";
  let results = req.params.results || 5;
  let skipvalue = results * (page - 1) || 0;
  const product = await Product.find({ color: filter })
    .sort({ price: 1 })
    .limit(2)
    .skip(skipvalue)
    .lean()
    .exec();
  return res.status(201).send({ product: product, status: true });
});

router.post("/", async function (req, res) {
  const product = await Product.create(req.body);
  return res.status(201).send(product);
});

module.exports = router;
