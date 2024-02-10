import { RequestHandler } from "express";
import { validate } from "../util";

export const validateMiddleware: <T extends object>(ClassConstructor: new () => T) => RequestHandler = (ClassConstructor) => {
  return (req, res, next) => {
    validate(ClassConstructor, req.body)
      .catch((error) => {
        next(error);
      })
      .then((result) => {
        req.body = result;
        next();
      })
  };
};
