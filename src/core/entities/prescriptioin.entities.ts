import { PrescriptionModel } from "../../models/prescriptionModel";


export class PrescriptionEntity {
  constructor(
    status: string,
    diagnosisIfNotICD: string,
    drugDetail: string,
    prescribersName: string,
  ) {
  }

  public static fromDatabase(obj: PrescriptionModel): PrescriptionEntity {
    const {
      status,
      diagnosisIfNotICD,
      drugDetail,
      prescribersName,
  } = obj;

  return new PrescriptionEntity(
    status as string,
    diagnosisIfNotICD as string,
    drugDetail as string,
    prescribersName as string,
  )
  }
}