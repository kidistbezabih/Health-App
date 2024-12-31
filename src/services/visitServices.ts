import { AppError } from "../core/errors/custom.errors";
import { VisitModel } from "../models/visitModel";
import { VisitEntity } from "../core/entities/visit.entities";


interface visit{
patientId:number
}
export class VisitService {
  public async createVisit(patientId: number): Promise<visit> {

    const patientVisit = await VisitModel.create({
      patientId
    })
    return patientVisit
  }

  public async getPatientVistsById(patientId: number): Promise<VisitEntity[]> {

    const patientVisits = await VisitModel.findAll({
      where: { patientId },
      attributes: [
        'visitId'
      ],
    });

    if (patientVisits.length == 0) {
      throw AppError.notFound("Patient has no visit history");
    }
    // for all the visit id prepare some kind of onbject to store the information 
    // that we get from examination room,  laboratory result, doctor prescription.


    // then lis the objects
    return patientVisits
  }

  public async deleteVisitById(id: number): Promise<boolean>{

    const deletedCount = await VisitModel.destroy({
      where: {id}
    })
    return deletedCount > 0
  }
}
