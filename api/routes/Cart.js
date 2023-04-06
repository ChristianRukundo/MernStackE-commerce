const express = require("express");
const router = express.Router();
const { Carts } = require("../models/Cart.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const mongoose = require("mongoose");



router.post("/", verifyToken, async (req, res) => {

  const Cart = new Carts(req.body);
  Cart
    .save()
    .then((createdProduct) => res.status(201).json(createdProduct))
    .catch((err) =>
      res.status(400).json({ success: false, message: "Invalid Category" })
    );
});


/** ======UPDATE PRODUCT =================== */

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {


  try {
    const updatedCart = await Carts.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json(error);
  }
});




/** ======DELETE PRODUCT =================== */

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Carts.findByIdAndDelete(req.params.id);
    res.status(200).json("PRODUCT has been deleted succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

/** ======GET CARTS =================== */

router.get("/find/:userId",verifyTokenAndAuthorization,  async (req, res) => {
  try {
    const Cart = await Carts.findOne({ userId : req.params.userId });
    res.status(200).json(Cart);
  } catch (error) {
    res.status(500).json(error);
  }
});
 /** ======GET ALL PRODUCT =================== */
 router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Carts.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
