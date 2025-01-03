import { AppError } from "../core/errors/custom.errors";
import { PreExaminationModel } from "../models/preExaminationModel";
import { PreExaminationEntity } from "../models/entities/preExamination.entities";


export class PreExaminationService {

  public async getPreExaminationRecordById(id: number): Promise<PreExaminationEntity> {
    if (!id) {
      throw AppError.notFound("Card number is required");
    }

    const patientInfo = await PreExaminationModel.findOne({
      where: { id },
      attributes: [
        'chiefComplaint',
        'hpi',
        'pastHx',
        'currentHealthStatus',
        'familyHx',
        'psychologicalAndPersonalHx',
        'general',
        'skin',
        'head',
        'eyes',
        'ear',
        'mouth',
        'breast',
        'respiratory',
        'gastro',
        'guneto',
        'meskal',
        'nervous',
        'examinedBy',
      ],
    });

    if (!patientInfo) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PreExaminationEntity.fromDatabase(patientInfo);
  }

}
