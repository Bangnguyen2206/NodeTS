import URL from "./url";
import axiosClient from "./AxiosClient";
import { Product } from "../../models/product.model";

const Ysmatrix_API = {
  getAllProducts() {
    const url = URL.GET_PRODUCTS;
    return axiosClient.get(url);
  },
  getSingleProducts(productId: string) {
    const url = `${URL.GET_PRODUCTS}/${productId}`;
    return axiosClient.get(url);
  },
  createSingleProduct(data: Product) {
    const url = `${URL.GET_PRODUCTS}/add`;
    const body = JSON.stringify(data);
    return axiosClient.post(url, body);
  },
};
export default Ysmatrix_API;
