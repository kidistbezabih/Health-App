import { ReferralEntity } from "../core/entities/referal.entities";
import { AppError } from "../core/errors/custom.errors";
import { ReferralModel } from "../models/referralModel";


export class ReferralService {

  public async createReferral(
    patientId: number,
    to: string,
    Hx: string,
    P_E: string,
    IX: string,
    diagnosis: string,
    treatmentGiven: string,
    reasonForReferral: string,
    physician: string,
  ): Promise<ReferralEntity> {

   const referral = await ReferralModel.create({
    patientId,
    to,
    Hx,
    P_E,
    IX,
    diagnosis,
    treatmentGiven,
    reasonForReferral,
    physician,
   });

  return ReferralEntity.fromDatabase(referral);
}

public async updateReferral(
    id: number,
    to:string,
    Hx:string,
    P_E:string,
    IX:string,
    diagnosis:string,
    treatmentGiven:string,
    reasonForReferral:string,
    physician:string
  ):Promise<ReferralEntity>{
      const referral = await ReferralModel.findOne({where:{id}});        
      if (!referral){
        throw AppError.notFound;
      }
      referral.to = to ?? referral.to;
      referral.Hx = Hx ?? referral.Hx;
      referral.P_E = P_E ?? referral.P_E;
      referral.IX = IX ?? referral.IX;
      referral.diagnosis = diagnosis ?? referral.diagnosis;
      referral.treatmentGiven = treatmentGiven ?? referral.treatmentGiven;
      referral.reasonForReferral = reasonForReferral ?? referral.reasonForReferral;
      referral.physician = physician ?? referral.physician;

      await referral.save();
      return referral;
    }  

  public async getReferral(id: number): Promise<ReferralEntity>{
        const referral = await ReferralModel.findOne({where: {id}})

        if(!referral){
          throw AppError.notFound;
        }
        return referral
    }

  public async getAllReferral(): Promise<ReferralEntity[]>{
      const referrals = await ReferralModel.findAll()

      if(!referrals){
        throw AppError.notFound
      }
      return referrals
  }

    public async deleteReferral(id: number): Promise<boolean>{
        const deletedCount = await ReferralModel.destroy({
          where: {id}
        })
        return deletedCount > 0
    }
}
