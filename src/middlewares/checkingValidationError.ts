import { Request, Response, NextFunction } from "express";
import { Result, validationResult } from "express-validator";
import { AppError } from "../core/errors/custom.errors";

export const CheckValidationError = (req: Request, res: Response, next: NextFunction): void => {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    // Use AppError or send the error response directly
    const err = errors.array();
    throw AppError.validationError(err); // Ensure AppError is properly implemented.
  }

  next();
};
