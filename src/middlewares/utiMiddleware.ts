import { Request, Response, NextFunction } from "express";

const utilMiddleware = {
  getLang(req: Request, _res: Response, next: NextFunction) {
    let lang: any = "vi";
    if (req.headers["customerlanguage"]) {
      lang = req.headers["customerlanguage"];
    }
    console.log(lang);
    next();
  },
};
export default utilMiddleware;
