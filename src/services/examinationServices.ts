import { ExaminationEntity } from "../core/entities/examination.entities";
import { AppError } from "../core/errors/custom.errors";
import { ExaminationModel } from "../models/examinationModel";

export class ExaminationService {
  public async getPatientExaminationRecord(visitId: number): Promise<ExaminationEntity[]> {
    const patientData = await ExaminationModel.findAll({where:{visitId}});

    if(!patientData){
      AppError.notFound("No examination record!")
    }

    return patientData.map(ExaminationEntity.fromDatabase);
  }
  
  public async getAllExaminationRecords(): Promise<ExaminationEntity[]> {
    const patientData = await ExaminationModel.findAll();

    if(!patientData){
      AppError.notFound
    }
    return patientData.map(ExaminationEntity.fromDatabase);
  }

  public async deleteExamination(id: number): Promise<boolean> {
    const deletedCount = await ExaminationModel.destroy({where:{id}});
    
    return deletedCount > 0 
  }

}
  