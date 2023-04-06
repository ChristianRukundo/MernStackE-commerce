const express = require("express");
const router = express.Router();
const { Orders } = require("../models/Order.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const mongoose = require("mongoose");



router.post("/", verifyToken, async (req, res) => {

  const Order = new Orders(req.body);
    Order
    .save()
    .then((createdOrder) => res.status(201).json(createdOrder))
    .catch((err) =>
      res.status(400).json({ success: false, message :err })
    );
});


/** ======UPDATE ORDER =================== */

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {


  try {
    const updatedOrder = await Orders.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json(error);
  }
});




/** ======DELETE ORDER =================== */

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);
    res.status(200).json("ORDERS has been deleted succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

/** ======GET Orders =================== */

router.get("/find/:userId",verifyTokenAndAuthorization,  async (req, res) => {
  try {
    const Order = await Orders.find({ userId : req.params.userId });
    res.status(200).json(Order);
  } catch (error) {
    res.status(500).json(error);
  }
});
 /** ======GET ALL orders =================== */
 router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
 });


 //GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
  
    try {
      const income = await Orders.aggregate([
          {
              $match: {
                  createdAt:
                      { $gte: previousMonth }
              }
          },
        {
          $project: {
                month: { $month: "$createdAt" },
                sales: "$amount"
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
        
        res.status(200).json(income)
    } catch (error) {
      res.status(500).json(error);
    }
 })

module.exports = router;
