import { PrescriptionModel } from "../../models/prescriptionModel";


export class PrescriptionEntity {
  constructor(
    medicationType: string,
    medication: string,
    dosage: string,
    instruction: string,
  ) {
  }

  public static fromDatabase(obj: PrescriptionModel): PrescriptionEntity {
    const {
      medicationType,
      medication,
      dosage,
      instruction,
  } = obj;

  return new PrescriptionEntity(
    medicationType as string,
    medication as string,
    dosage as string,
    instruction as string,
  )
  }
}