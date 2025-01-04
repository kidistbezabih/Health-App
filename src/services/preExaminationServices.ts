import { AppError } from "../core/errors/custom.errors";
import { PreExaminationModel } from "../models/preExaminationModel";
import { PreExaminationEntity } from "../core/entities/preExamination.entities";


export class PreExaminationService {

  public async getPatientPreExaminationRecord(visitId: number): Promise<PreExaminationEntity> {
    if (!visitId) {
      throw AppError.notFound("Card number is required");
    }

    const patientInfo = await PreExaminationModel.findOne({
      where: { visitId },
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

    return patientInfo ;
  }

}
