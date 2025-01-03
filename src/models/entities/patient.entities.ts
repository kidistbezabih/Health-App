import { PatientModel } from "../patientModel"; 


export class PatientEntity {
	constructor(
	cardNumber: string,
  name: string,
  age: number,
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
    name,
    age,
    sex,
    address,
    zone,
    kebele,
    phoneNumber,
	} = obj;

  return new PatientEntity(
    cardNumber as string, 
    name as string,
    age as number,
    sex as string,
    address as string,
    zone as string,
    kebele as string,
    phoneNumber as string,
  )
}
}