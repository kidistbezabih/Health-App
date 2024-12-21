import { PatientModel } from "../models/patientModel"; 
import { PatientEntity } from "../core/entities/patient.entities";
import { AppError } from "../core/errors/custom.errors";

export class PatientService {
  // Fetch patient details by card number
  public async getPatientByCardNumber(cardNumber: string): Promise<PatientEntity> {
    if (!cardNumber) {
      throw AppError.notFound("Card number is required");
    }

    const patient = await PatientModel.findOne({
      where: { cardNumber },
      attributes: ["cardNumber", "name", "age", "sex", "address", "zone", "kebele", "phoneNumber"],
    });

    if (!patient) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PatientEntity.fromDatabase(patient);
  }

  public async getPatientByPhoneNumber(phoneNumber: string): Promise<PatientEntity> {
    if (!phoneNumber) {
      throw AppError.notFound("Card number is required");
    }

    const patient = await PatientModel.findOne({
      where: { phoneNumber },
      attributes: ["cardNumber", "name", "age", "sex", "address", "zone", "kebele", "phoneNumber"],
    });

    if (!patient) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PatientEntity.fromDatabase(patient);
  }

  public async getPatientByname(name: string): Promise<PatientEntity> {
    if (!name) {
      throw AppError.notFound("Card number is required");
    }

    const patient = await PatientModel.findOne({
      where: { name },
      attributes: ["cardNumber", "name", "age", "sex", "address", "zone", "kebele", "phoneNumber"],
    });

    if (!patient) {
      throw AppError.notFound("Can't find any patient with this card number");
    }

    return PatientEntity.fromDatabase(patient);
  }
}
