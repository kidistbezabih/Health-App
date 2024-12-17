import { PatientModel } from "../models/patientsModel";
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
}
