
import { Schema, model, Types } from "mongoose";
const cartSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "product", //name of the product model
  },
  count: {
    type: Number,
    default: 1,
  },
});

/**
 * User Schema
 * Defines the structure for user documents, including credentials and cart items.
 */


const userSchema = new Schema(
  {
    //structure of User resource
    username: {
      type: String,
      required: [true, "Username is reuired"],
      minLength: [4, "Username should be atleast 4 characters long"],
      maxLength: [6, "Username size exceeded 6 chars"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already existed"],
    },
    age: {
      type: Number,
    },
    cart: [cartSchema],// {product:"",count:2}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

/**
 * User Model
 * Provides an interface to the "users" collection in MongoDB.
 */
export const userModel = model("user", userSchema);

