import { ExaminationEntity } from "../core/entities/examination.entities";
import { AppError } from "../core/errors/custom.errors";
import { ExaminationModel } from "../models/examinationModel";

export class ExaminationService {
  public async deleteExamination(id: number): Promise<boolean> {
    const deletedCount = await ExaminationModel.destroy({where:{id}});

    return deletedCount > 0 

  }

  public async getPatientExaminationRecord(visitId: number): Promise<ExaminationEntity | null> {
    const patientInfo = await ExaminationModel.findOne({where:{visitId}});

    if(!patientInfo){
      throw AppError.notFound("No examination record!")
    }
    return patientInfo;
  }}
  