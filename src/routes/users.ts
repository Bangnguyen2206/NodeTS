import express from "express";
import ProductControllers from "../controllers/ProductControllers";

const userRoutes = express.Router();

userRoutes.get("/auth/login", ProductControllers.login);
/**
 * @openapi
 * /products:
 *  get:
 *     tags:
 *     - products
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
userRoutes.get("/products", ProductControllers.getAllProducts);
/**
 * @openapi
 * '/products/{productId}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the productId
 *     parameters:
 *      - name: productId
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/productResponse'
 *       404:
 *         description: Product not found
 *  delete:
 *     tags:
 *     - Products
 *     summary: Delete a single product
 *     parameters:
 *      - name: productId
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Product deleted
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
userRoutes.get("/products/:productId", ProductControllers.getSingleProducts);
/**
 * @openapi
 * '/products/add':
 *  post:
 *     tags:
 *     - Products
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Product'
 *     responses:
 *       200:
 *         description: Product created
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/productResponse'
 *           example:
 *             "title": "Canon EOS 1500D DSLR Camera with 18-55mm Lens"
 */
userRoutes.post("/products/add", ProductControllers.createSingleProducts);

export default userRoutes;
