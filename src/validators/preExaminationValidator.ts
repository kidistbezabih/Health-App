import { check } from "express-validator";
import { CheckValidationError } from "../middlewares/checkingValidationError";

export class PreExaminationValidator{
  public static onCreate(){
    return [
      check ('chiefComplaint', 'chiefComplaint is required').exists().isString(),
      check ('hpi', 'hpi is required').exists().isString(),
      check ('pastHx', 'pastHx is required').exists().isString(),
      check ('currentHealthStatus', 'currentHealthStatus is required').exists().isString(),
      check ('familyHx', 'familyHx is required').exists().isString(),
      check ('psychologicalAndPersonalHx', 'psychologicalAndPersonalHx is required').exists().isString(),
      check ('general', 'general is required').exists().isString(),
      check ('skin', 'skin is required').exists().isString(),
      check ('head', 'head is required').exists().isString(),
      check ('eyes', 'eyes is required').exists().isString(),
      check ('ear', 'ear is required').exists().isString(),
      check ('mouth', 'mouth is required').exists().isString(),
      check ('breast', 'breast is required').exists().isString(),
      check ('respiratory', 'respiratory is required').exists().isString(),
      check ('gastro', 'gastro is required').exists().isString(),
      check ('guneto', 'guneto is required').exists().isString(),
      check ('meskal', 'meskal is required').exists().isString(),
      check ('nervous', 'nervous is required').exists().isString(),
      check ('examinedBy', 'examinedBy is required').exists().isString(),
  ];
  }
  
  public static onUpdate(){
    return [
      check ('chiefComplaint', 'chiefComplaint is required').exists().isString(),
      check ('hpi', 'hpi is required').exists().isString(),
      check ('pastHx', 'pastHx is required').exists().isString(),
      check ('currentHealthStatus', 'currentHealthStatus is required').exists().isString(),
      check ('familyHx', 'familyHx is required').exists().isString(),
      check ('psychologicalAndPersonalHx', 'psychologicalAndPersonalHx is required').exists().isString(),
      check ('general', 'general is required').exists().isString(),
      check ('skin', 'skin is required').exists().isString(),
      check ('head', 'head is required').exists().isString(),
      check ('eyes', 'eyes is required').exists().isString(),
      check ('ear', 'ear is required').exists().isString(),
      check ('mouth', 'mouth is required').exists().isString(),
      check ('breast', 'breast is required').exists().isString(),
      check ('respiratory', 'respiratory is required').exists().isString(),
      check ('gastro', 'gastro is required').exists().isString(),
      check ('guneto', 'guneto is required').exists().isString(),
      check ('meskal', 'meskal is required').exists().isString(),
      check ('nervous', 'nervous is required').exists().isString(),
      check ('examinedBy', 'examinedBy is required').exists().isString(),

    ];
  }

  public static validateErrors = CheckValidationError;  
}