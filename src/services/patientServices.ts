import { PatientModel } from "../models/patientModel"; 
import { PatientEntity } from "../core/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";
import { Op } from "sequelize";

export class PatientService {
  public async getPatient(searchkey: string): Promise<PatientEntity[]> {
    console.log("Search Key:", searchkey);

  const patients = await PatientModel.findAll({
    where: {
      [Op.or]: [
        { firstName: { [Op.iLike]: `%${searchkey}%` } },
        // { lastName: { [Op.iLike]: `%${searchkey}%` } },
        { phoneNumber: { [Op.iLike]: `%${searchkey}%` } },
        { cardNumber: { [Op.iLike]: `%${searchkey}%` } },
      ],
    }
  });


  if (!patients || patients.length === 0) {
    throw AppError.notFound("Can't find any patient with the provided search key");
  }

  return patients.map(PatientEntity.fromDatabase);
}


  public async getAllPatients(): Promise<PatientEntity[]> {
    const patients = await PatientModel.findAll();

    if (!patients || patients.length === 0) {
      throw AppError.notFound("No patient registered yet");
    }
    return patients.map(PatientEntity.fromDatabase);
   }

  public async deletePatien(id: number):Promise<Boolean>{
      const deleteCount = await PatientModel.destroy({where: {id}})
  
      return deleteCount > 0
  
    }  
}
