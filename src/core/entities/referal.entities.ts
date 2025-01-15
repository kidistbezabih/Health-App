import { ReferralModel } from "../../models/referralModel";

export class ReferralEntity {
  constructor( 
    to: string,
    Hx: string,
    P_E: string,
    IX: string,
    diagnosis: string,
    treatmentGiven: string,
    reasonForReferral: string,
    physician: string
     ) {
  }

  public static fromDatabase(obj: ReferralModel): ReferralEntity {
    const {
      to,
      Hx,
      P_E,
      IX,
      diagnosis,
      treatmentGiven,
      reasonForReferral,
      physician
  } = obj;

  return new ReferralEntity(
    to as string,
    Hx as string,
    P_E as string,
    IX as string,
    diagnosis as string,
    treatmentGiven as string,
    reasonForReferral as string,
    physician as string
  )}
}