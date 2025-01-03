import { InstitutionModel } from "../institutionModel";


export class InstitutionEntity {
  constructor(
    name: string,
    address: string,
    phone: string,
    email: string,
    googleMapsLocation: string
  ) {
  }

  public static fromDatabase(obj: InstitutionModel): InstitutionEntity {
    const {
      name,
      address,
      phone,
      email,
      googleMapsLocation
  } = obj;

  return new InstitutionEntity(
    name as string,
    address as string,
    phone as string,
    email as string,
    googleMapsLocation as string,
  )
}
}