import { PatientModel } from "../models/patientModel"; 
import { PatientEntity } from "../models/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";
import { Op } from "sequelize";

export class PatientService {
  public async getPatient(searchkey: string): Promise<PatientEntity[]> {
    console.log("Search Key:", searchkey);

  const patients = await PatientModel.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchkey}%` } },
        { phoneNumber: { [Op.iLike]: `%${searchkey}%` } },
        { cardNumber: { [Op.iLike]: `%${searchkey}%` } },
      ],
    },
    attributes: [
      "cardNumber",
      "name",
      "age",
      "sex",
      "address",
      "zone",
      "kebele",
      "phoneNumber",
    ],
  });

  console.log("Patient Found:", patients);


  if (!patients || patients.length === 0) {
    throw AppError.notFound("Can't find any patient with the provided search key");
  }

  return patients.map(patient =>  PatientEntity.fromDatabase(patient));
  }


  public async getAllPatients(): Promise<PatientEntity[]> {
    const patients = await PatientModel.findAll();

    if (!patients || patients.length === 0) {
      throw AppError.notFound("No patient registered yet");
    }
    console.log(patients)
        return patients.map(patient => patient.get({ plain: true }));
   }

  public async deletePatien(cardNumber: number):Promise<Boolean>{
      const deleteCount = await PatientModel.destroy({where: {cardNumber: cardNumber}})
  
      return deleteCount > 0
  
    }  
}
