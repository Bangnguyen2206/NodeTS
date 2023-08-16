require("dotenv").config();
import "module-alias/register";
import { createServer } from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "@routes/users";
import swaggerDocs from "./docs/swagger";
// import ValidationMiddleware from "./middlewares/validation";
// import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || "4000";
const httpServer = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup multiple route here 23
// app.use("/", ValidationMiddleware.checkToken, userRoutes);
app.use("/", userRoutes);
app.get("/", (_req, res) => {
  res.send("Express + TypeScript Server Nodejs");
});
swaggerDocs(app, PORT);

httpServer.listen(PORT, () => {
  console.log(`🚀 [server]: Server is running at http://localhost:${PORT}`);
});
