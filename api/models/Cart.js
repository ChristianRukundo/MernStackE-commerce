const mongoose = require("mongoose");
// const { Category } = require("../models/category");
const CartSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
      unique: true,
    },

    product: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
CartSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

CartSchema.set("toJSON", {
  virtuals: true,
});
exports.Carts = mongoose.model("Cart", CartSchema);
// export default = ProductCollection
