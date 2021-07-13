import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController
} from "./controllers/categoryController";
import { 
  createProductController, 
  deleteProductController, 
  getProductsController, 
  imageProductController
} from "./controllers/productController";
const imagemController = require("./controllers/imagemController");

mongoose.connect("mongodb+srv://PauloMongoDB:962752692@cluster0.nmiwd.mongodb.net/sports_store",
  { useNewUrlParser: true });

const app = express();
const router = express.Router();
app.use(express.urlencoded());
app.use(fileUpload());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

app.post("/category", createCategoryController);
app.get("/categories", getCategoriesController);
app.post("/deletecategory", deleteCategoryController);
app.post("/uploadimagem", imagemController);
app.post("/createproduct", createProductController);
app.get("/products", getProductsController);
app.get("/image/:id", imageProductController);
app.post("/deleteproduct", deleteProductController);

app.listen({ port: 5100 }, () => {
  console.log("Express Node server listening on port 5100");
})