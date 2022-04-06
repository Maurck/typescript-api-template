import { validationResult } from "express-validator";
import { Response, Request, NextFunction } from "express";

//Checks errors on validators, if one is founded then send an error to client
export const fieldValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};
