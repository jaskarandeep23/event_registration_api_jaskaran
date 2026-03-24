import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpStatus";

export const validate =
  (schema: any) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: "VALIDATION_ERROR",
        message: error.details[0].message,
      });
      return;
    }

    next();
  };