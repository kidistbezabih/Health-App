import { InstitutionModel } from "../../models/institutionModel";
import { MedicalCertificateModel } from "../../models/medicalCertificateModel";

export class MedicalCertificateEntity {
  constructor( 
    dateOfExamination: Date,
    diagnosis: string,
    treatmentGiven: string,
    sickLeave: string
   ) {
  }

  public static fromDatabase(obj: MedicalCertificateModel): MedicalCertificateEntity {
    const {
      dateOfExamination,
      diagnosis,
      treatmentGiven,
      sickLeave,
  
  } = obj;

  return new MedicalCertificateEntity(
    dateOfExamination as Date,
    diagnosis as string,
    treatmentGiven as string,
    sickLeave as string,
  )
}
}