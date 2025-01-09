import { InstitutionModel } from "../../models/institutionModel";
import { MedicalCertificateModel } from "../../models/medicalCertificateModel";

export class MediacalCertificateEntity {
  constructor( 
    dateOfExamination: Date,
    diagnosis: string,
    treatmentGiven: string,
    sickLeave: string
   ) {
  }

  public static fromDatabase(obj: MedicalCertificateModel): MediacalCertificateEntity {
    const {
      dateOfExamination,
      diagnosis,
      treatmentGiven,
      sickLeave,
  
  } = obj;

  return new MediacalCertificateEntity(
    dateOfExamination as Date,
    diagnosis as string,
    treatmentGiven as string,
    sickLeave as string,
  )
}
}