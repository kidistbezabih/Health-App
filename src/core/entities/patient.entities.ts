import { PatientModel } from "../../models/patientModel"; 


export class PatientEntity {
	constructor(
	cardNumber: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  sex: string,
  address: string,
  zone: string,
  kebele: string,
  phoneNumber: string,
	) {
	}

	public static fromDatabase(obj: PatientModel): PatientEntity {
		const {
    cardNumber,
    firstName,
    lastName,
    birthDate,
    sex,
    address,
    zone,
    kebele,
    phoneNumber,
	} = obj;

  return new PatientEntity(
    cardNumber as string, 
    firstName as string,
    lastName as string,
    birthDate as Date,
    sex as string,
    address as string,
    zone as string,
    kebele as string,
    phoneNumber as string,
  )
}
}