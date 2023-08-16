import "module-alias/register";
import ProductServices from "@services/ProductService";
import { Request, Response } from "express";
import db from "../databases/db";
import { getCache } from "../databases/redisCache";

const ProductControllers = {
  // Authentication
  async login(_req: Request, res: Response) {
    try {
      return res.status(200).json({
        responseCode: 200,
        message: "Hello world ! Welcome to the login page 🚀",
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Get list products
  async getAllProducts(_req: Request, res: Response) {
    try {
      const result = await ProductServices.getAllProducts();
      return res.status(200).json({
        responseCode: 200,
        message: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Get Single products
  async getSingleProducts(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const result = await ProductServices.getSingleProducts(productId);
      return res.status(200).json({
        responseCode: 200,
        message: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Create Single products
  async createSingleProducts(req: Request, res: Response) {
    try {
      const result = await ProductServices.createSingleProducts(req.body);
      const cache = await getCache();
      cache.setEx(`product-${Math.random()}`, 60, result.data.title);
      await db("products").insert({
        title: result.data.title,
        quantity: result.data.id,
        label: "products",
      });
      return res.status(200).json({
        responseCode: 200,
        message: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default ProductControllers;
