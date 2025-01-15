import { PatientModel } from "../../models/patientModel";

export class PatientEntity {
  public cardNumber: string;
  public firstName: string;
  public lastName: string;
  public birthDate: Date;
  public sex: string;
  public address: string;
  public zone: string;
  public kebele: string;
  public phoneNumber: string;

  constructor(
    cardNumber: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    sex: string,
    address: string,
    zone: string,
    kebele: string,
    phoneNumber: string
  ) {
    this.cardNumber = cardNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.sex = sex;
    this.address = address;
    this.zone = zone;
    this.kebele = kebele;
    this.phoneNumber = phoneNumber;
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
      phoneNumber as string
    );
  }
}
