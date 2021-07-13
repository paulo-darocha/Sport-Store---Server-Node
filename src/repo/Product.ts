import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  description: String,
  price: Number,
  detail: String,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;