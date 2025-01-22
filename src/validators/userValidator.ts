import { check } from "express-validator";
import { CheckValidationError } from "../middlewares/checkingValidationError";

export class UserValidators {
  public static onCreate() {
    return [
      check('name', 'name is required').exists().isString(),
      check('email', 'email is required').exists().normalizeEmail().isEmail(),
      check('phone', 'phone is required').optional().isString(),
      CheckValidationError
    ];
  }

  public static onUpdate() {
    return [
      check('name', '').exists().isString(),
      check('email', '').exists().normalizeEmail().isEmail(),
      check('phone', '').optional().isString(),
      check('age', '').optional().isNumeric(),
      CheckValidationError
    ]
  }
}
