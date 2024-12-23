import { check } from "express-validator";
import { CheckValidationError } from "../middlewares/checkingValidationError";

export class PatientValidator{
  public static onCreate(){
    return [
      check('cardNumber', 'Card number is required and must be a string').exists().isString(),
      check('name', 'Name is required and must be a string').exists().isString(),
      check('age', 'Age is required and must be a positive integer').exists().isInt({ min: 0 }),
      check('sex', 'Sex is required and must be a string').exists().isString(),
      check('address', 'Address is required and must be a string').exists().isString(),
      check('zone', 'Zone is required and must be a string').exists().isString(),
      check('kebele', 'Kebele is required and must be a string').exists().isString(),
      check('phoneNumber', 'Phone number is required and must be a string').exists().isString(),
  ];
  }
  
  public static onUpdate(){
    return [
      check('cardNumber', 'Card number must be a string if provided').optional().isString(),
      check('name', 'Name must be a string if provided').optional().isString(),
      check('age', 'Age must be a positive integer if provided').optional().isNumeric(),
      check('sex', 'Sex must be a string if provided').optional().isString(),
      check('address', 'Address must be a string if provided').optional().isString(),
      check('zone', 'Zone must be a string if provided').optional().isString(),
      check('kebele', 'Kebele must be a string if provided').optional().isString(),
      check('phoneNumber', 'Phone number must be a string if provided').optional().isString(),
    ];
  }

  public static validateErrors = CheckValidationError;  
}