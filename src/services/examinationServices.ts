import { ExaminationModel } from "../models/examinationModel";

export class ExaminationService {
  // Fetch patient details by card number
  public async deleteExamination(id: number): Promise<boolean> {

    const deletedCount = await ExaminationModel.destroy({where:{id}});

    return deletedCount > 0 

  }}