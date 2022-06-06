const express = require("express");

const Product = require("../models/productModel");

const router = express.Router();

router.get("/", async function (req, res) {
  const product = await Product.find().lean().exec();
  return res.status(201).send(product);
});
router.post("/", async function (req, res) {
  const product = await Product.create(req.body).lean().exec();
  return res.status(201).send(product);
});

module.exports = router;
