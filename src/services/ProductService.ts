import Ysmatrix_API from "../external_api/ysmatrix_api/ApiService";
import { Product } from "../models/product.model";

const ProductServices = {
  // Get all products
  async getAllProducts() {
    try {
      const result = await Ysmatrix_API.getAllProducts();
      return result;
    } catch (err) {
      return {
        responseCode: 0,
        data: "Error",
      };
    }
  },
  // Get single products
  async getSingleProducts(productId: string) {
    try {
      const result = await Ysmatrix_API.getSingleProducts(productId);
      return result;
    } catch (err) {
      return {
        responseCode: 0,
        data: "Error",
      };
    }
  },
  // Create single products
  async createSingleProducts(data: Product) {
    try {
      const result = await Ysmatrix_API.createSingleProduct(data);
      return result;
    } catch (err) {
      return {
        responseCode: 0,
        data: "Error",
      };
    }
  },
};
export default ProductServices;
