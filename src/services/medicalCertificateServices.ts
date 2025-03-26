import { MedicalCertificateEntity } from "../core/entities/medicalCertificate.entities";
import { AppError } from "../core/errors/custom.errors";
import { MedicalCertificateModel } from "../models/medicalCertificateModel";


export class MedicalCertificateServices {
  public async creatMedicalCertificate (
    visitId: number,
    dateOfExamination: Date,
    diagnosis: string,
    treatmentGiven: string,
    sickLeave: string,
  ): Promise<MedicalCertificateEntity> {
   const medicalCertificate = await MedicalCertificateModel.create({
    visitId,
    dateOfExamination,
    diagnosis,
    treatmentGiven,
    sickLeave,
   });
   if (!medicalCertificate){
    AppError.notFound;
   }

  return medicalCertificate
}

    public async updateMedicalCertificate(
      id: number,
      dateOfExamination: Date,
      diagnosis: string,
      treatmentGiven: string,
      sickLeave: string,
    ):Promise<MedicalCertificateEntity>{
        const medicalCertificate = await MedicalCertificateModel.findOne({where:{id}});
        
        if (!medicalCertificate){
          throw AppError.notFound("medical certificate with this id!")
        }
          medicalCertificate.id = id ?? medicalCertificate.id
          medicalCertificate.dateOfExamination = dateOfExamination ?? medicalCertificate.dateOfExamination
          medicalCertificate.diagnosis = diagnosis ?? medicalCertificate.diagnosis
          medicalCertificate.treatmentGiven = treatmentGiven ?? medicalCertificate.treatmentGiven
          medicalCertificate.sickLeave = sickLeave ?? medicalCertificate.sickLeave
        await medicalCertificate.save();

        return medicalCertificate;
      }  

    public async getMedicalCertificate(id: number): Promise<MedicalCertificateEntity>{
        const medicalCertificate = await MedicalCertificateModel.findOne({where: {id}})

        if(!medicalCertificate){
          throw AppError.notFound
        }
        return medicalCertificate
    }

    public async getAllMedicalCertificate(): Promise<MedicalCertificateEntity>{
      const medicalCertificate = await MedicalCertificateModel.findAll()

      if(!medicalCertificate){
        throw AppError.notFound
      }
      return medicalCertificate
  }


    public async deleteMedicalCertificate(id: number): Promise<boolean>{
        const deletedCount = await MedicalCertificateModel.destroy({
          where: {id}
        })
        return deletedCount > 0
      }
    
}
