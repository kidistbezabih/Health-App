import { PrescriptionModel } from "../prescriptionModel";


export class PrescriptionEntity {
  constructor(
    cardNumber: string,
    status: string,
    diagnosisIfNotICD: string,
    drugDetail: string,
    prescribersName: string,
  ) {
  }

  public static fromDatabase(obj: PrescriptionModel): PrescriptionEntity {
    const {
      cardNumber,
      status,
      diagnosisIfNotICD,
      drugDetail,
      prescribersName,
  } = obj;

  return new PrescriptionEntity(
    cardNumber as string,
    status as string,
    diagnosisIfNotICD as string,
    drugDetail as string,
    prescribersName as string,
  )
  }
}