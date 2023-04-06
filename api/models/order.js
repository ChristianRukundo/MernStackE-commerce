const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
          default: 1
      },
    },
    ],
    amount: {
        type: Number,
        required: true,
    }, 
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
},
    {
        timestamps: true
});
OrderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

OrderSchema.set("toJSON", {
  virtuals: true,
});
exports.Orders = mongoose.model("Orders", OrderSchema);
// export default = ProductCollection
