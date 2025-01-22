import { PrescriptionModel } from "../models/prescriptionModel"; 
import { PatientEntity } from "../core/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";
import { PrescriptionEntity } from "../core/entities/prescriptioin.entities";

export class PrescriptionService {
    public async createPrescription(visitId: number, medicationType: string, medication: string, dosage: string, instruction: string): Promise<PrescriptionEntity> {
      const patientPrescription = await PrescriptionModel.create({
        visitId, 
        medicationType,
        medication,
        dosage,
        instruction,
      })
      return patientPrescription
    }

  public async getPrescription(id: number): Promise<PrescriptionEntity> {
    const prescription = await PrescriptionModel.findOne({ where: { id }});

    if (!prescription) {
     throw AppError.notFound("Can't find any patient with this card number");
    }

    return prescription
  }

  public async updatePrescription(id: number, status:string, diagnosisIfNotICD:string, drugDetail:string, prescribersName:string):Promise<PrescriptionEntity>{
    const prescription = await PrescriptionModel.findOne({where: {id}});

    if (!prescription){
      throw AppError.notFound("cant find with this id!")
    }
    prescription.medicationType = status??prescription.medicationType,
    prescription.medication = diagnosisIfNotICD ?? prescription.medication
    prescription.dosage = drugDetail ?? prescription.dosage
    prescription.instruction = prescribersName ?? prescription.instruction
    await prescription.save()

    return prescription
  }
    public async getAllReferral(): Promise<PrescriptionEntity[]>{
      const prescriptions = await PrescriptionModel.findAll()

      if(!prescriptions){
        AppError.notFound("No data!");
      }
      return prescriptions
    }

  public async deletePrescription(id: number):Promise<Boolean>{
      const deleteCount = await PrescriptionModel.destroy({where: {id}})
  
      return deleteCount > 0
  
    }  
}
