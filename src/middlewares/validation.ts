import { Request, Response, NextFunction } from "express";
import ResponseCode from "../constants/ApiResponseCode";

const ValidationMiddleware = {
  checkToken(req: Request, res: Response, next: NextFunction) {
    if (!req.headers["accessToken"] || req.headers["accessToken"] === "") {
      return res.status(200).json(ResponseCode.CAN_NOT_GET_ACCESS_TOKEN());
    } else {
      next();
    }
  },
};

export default ValidationMiddleware;
