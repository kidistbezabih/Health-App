import { UltraSoundModel } from "../../models/ultraSoundModel";


export class UltraSoundEntity {
  constructor(
    examType: string,
    notes: string,
    imageFilePath: string,
    findings: string,
    diagnosis: string,
    technician: string,
  ) {

  }

  public static fromDatabase(obj: UltraSoundModel): UltraSoundEntity {
    const {
      examType,
      notes,
      imageFilePath,
      findings,
      diagnosis,
      technician,
  } = obj;

  return new UltraSoundEntity(
    examType as string,
    notes as string,
    imageFilePath as string,
    findings as string,
    diagnosis as string,
    technician as string
  )
  }
}