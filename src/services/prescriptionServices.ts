import { PrescriptionModel } from "../models/prescriptionModel"; 
import { PatientEntity } from "../models/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";
import { PrescriptionEntity } from "../models/entities/prescriptioin.entities";


interface PrescriptionUpdate {
  status: string;
  diagnosisIfNotICD: string;
  drugDetail: string;
  prescribersName: string;
}



export class PrescriptionService {
    public async createPrescritpion(visitId: number, cardNumber:string, status: string, diagnosisIfNotICD: string, drugDetail: string, prescribersName: string): Promise<PrescriptionEntity> {
      const patientPrescription = await PrescriptionModel.create({
       visitId, cardNumber, status, diagnosisIfNotICD, drugDetail, prescribersName
      })
      return PrescriptionEntity.fromDatabase(patientPrescription)
    }

  public async getPrescription(id: number): Promise<PrescriptionEntity> {
    const prescription = await PrescriptionModel.findOne({
      where: { id },
      attributes: [
        "status",
        "diagnosisIfNotICD",
        "drugDetail",
        "prescribersName"
      ],
    });

    if (!prescription) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PrescriptionEntity.fromDatabase(prescription);
  }

  public async updatePrescription(id: number, status:string, diagnosisIfNotICD:string, drugDetail:string, prescribersName:string):Promise<void>{
    const prescription = await PrescriptionModel.findOne({where: {id}});

    if (prescription){
      prescription.status = status||prescription.status,
      prescription.diagnosisIfNotICD = diagnosisIfNotICD || prescription.diagnosisIfNotICD
      prescription.drugDetail = drugDetail || prescription.drugDetail
      prescription.prescribersName = prescribersName || prescription.prescribersName
      await prescription.save()
    }
  }

  public async deletePrescription(id: number):Promise<Boolean>{
      const deleteCount = await PrescriptionModel.destroy({where: {id}})
  
      return deleteCount > 0
  
    }  
}
