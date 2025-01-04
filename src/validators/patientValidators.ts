import { check } from "express-validator";
import { CheckValidationError } from "../middlewares/checkingValidationError";

export class PatientValidator{
  public static onCreate(){
    return [
      check('cardNumber', 'Card number is required and must be a string').exists().isString(),
      check('firstName', 'First name is required and must be a string').exists().isString(),
      check('lastName', 'Last name is required and must be a string').exists().isString(),
      check('birthDate', 'birthDate is required and must be string').exists().isDate(),
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
      check('firstName', 'First name must be a string if provided').optional().isString(),
      check('lastName', 'Last name  must be a string if provided').optional().isString(),
      check('birthDate', 'birthDate must be a date if provided').optional().isDate(),
      check('sex', 'Sex must be a string if provided').optional().isString(),
      check('address', 'Address must be a string if provided').optional().isString(),
      check('zone', 'Zone must be a string if provided').optional().isString(),
      check('kebele', 'Kebele must be a string if provided').optional().isString(),
      check('phoneNumber', 'Phone number must be a string if provided').optional().isString(),
    ];
  }

  public static validateErrors = CheckValidationError;  
}