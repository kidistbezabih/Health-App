import { PatientModel } from "../models/patientModel"; 
import { PatientEntity } from "../core/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";
import { Op } from "sequelize";

export class PatientService {
  public async getPatient(searchKey: string): Promise<PatientEntity> {
    if (!searchKey) {
      throw AppError.notFound("Card number is required");
    }

    const patient = await PatientModel.findOne({
      where: { 
        [Op.and]: {
          name: {
              [Op.iLike]: `%${searchKey}%`
          },
          phoneNumber: {
              [Op.iLike]: `%${searchKey}%`
          },
          cardNumber: {
              [Op.iLike]: `%${searchKey}%`
          }
        }
       },
      attributes: ["cardNumber", "name", "age", "sex", "address", "zone", "kebele", "phoneNumber"],
    });

    if (!patient) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PatientEntity.fromDatabase(patient);
  }

  public async deletePatien(cardNumber: number):Promise<Boolean>{
      const deleteCount = await PatientModel.destroy({where: {cardNumber: cardNumber}})
  
      return deleteCount > 0
  
    }  
}
