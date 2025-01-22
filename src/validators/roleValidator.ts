import { check } from "express-validator";
import { CheckValidationError } from "../middlewares/checkingValidationError";


export class RoleValidators {
  public static onCreate() {
    return [
      check('role', '').exists().isString(),
      check('displayName', '').exists().normalizeEmail().isEmail(),
      check('description', '').optional().isString(),
      CheckValidationError
    ];
  }

  public static onUpdate() {
    return [
      check('role', '').exists().isString(),
      check('displayName', '').exists().isString(),
      check('description', '').optional().isString(),
      CheckValidationError
    ];
  }
}
