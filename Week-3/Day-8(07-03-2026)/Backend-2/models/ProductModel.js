/**
 * @file ProductModel.js
 * @description Mongoose schema and model for products.
 */

import { Schema, model } from "mongoose";

/**
 * Product Schema
 * Defines the structure for product documents in MongoDB.
 */


const productSchema = new Schema(
  {
    productId: {
      type: Number,
      required: [true, "ProductId is required"],
    },
    productName: {
      type: String,
      required: [true, "ProductName is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [10000, "Price is too low"],
      max: [50000, "Price limit exceeded"],
    },
    brand: {
      type: String,
      required: [true, "Brand name is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * Product Model
 * Provides an interface to the "products" collection in MongoDB.
 */
export const productModel = model("product", productSchema);

