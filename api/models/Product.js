const mongoose = require("mongoose");
// const { Category } = require("../models/category");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);
ProductSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

ProductSchema.set("toJSON", {
  virtuals: true,
});
exports.Products = mongoose.model("Products", ProductSchema);
// export default = ProductCollection
