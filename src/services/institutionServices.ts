import { InstitutionEntity } from "../core/entities/institution.entities";
import { InstitutionModel } from "../models/institutionModel";

export class InstitutionService {
  // Fetch patient details by card number
  public async getInstitutions(): Promise<InstitutionEntity[]> {

    const institutions = await InstitutionModel.findAll();

    return institutions  
  }}