const express = require("express");
const router = express.Router();
const { Products } = require("../models/product.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const mongoose = require("mongoose");



router.post("/", verifyTokenAndAdmin, async (req, res) => {

  const product = new Products(req.body);
  product
    .save()
    .then((createdProduct) => res.status(201).json(createdProduct))
    .catch((err) =>
      res.status(400).json({ success: false, message: "Invalid Category" })
    );
});


/** ======UPDATE PRODUCT =================== */

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});




/** ======DELETE PRODUCT =================== */

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("PRODUCT has been deleted succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

/** ======GET PRODUCT =================== */

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
 /** ======GET ALL PRODUCT =================== */

router.get("/",  async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products; 
    if (qNew) {
      products = await Products.find().sort({ createdAt: -1}).limit(5)
    } else if (qCategory) {
      products = await Products.find({
        categories: {
          $in: [qCategory],
          
        }
      })
    } else {
      products = await Products.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
