import { PreExaminationModel } from "../../models/preExaminationModel";

export class PreExaminationEntity{
 constructor( 
    patientId: number,
    chiefComplaint: string,
    hpi: string,
    pastHx: string,
    currentHealthStatus: string,
    familyHx: string,
    psychologicalAndPersonalHx: string,
    general: string,
    skin: string,
    head: string,
    eyes: string,
    ear: string,
    mouth: string,
    breast: string,
    respiratory: string,
    gastro: string,
    guneto: string,
    meskal: string,
    nervous: string,
    examinedBy: string,
  ){
    
  }

    public static fromDatabase(obj: PreExaminationModel) :PreExaminationEntity{
     const{
      visitId,
      chiefComplaint,
      hpi,
      pastHx,
      currentHealthStatus,
      familyHx,
      psychologicalAndPersonalHx,
      general,
      skin,
      head,
      eyes,
      ear,
      mouth,
      breast,
      respiratory,
      gastro,
      guneto,
      meskal,
      nervous,
      examinedBy,
     } = obj

     return new PreExaminationEntity(
      visitId as number,
      chiefComplaint as string,
      hpi as string,
      pastHx as string,
      currentHealthStatus as string,
      familyHx as string,
      psychologicalAndPersonalHx as string,
      general as string,
      skin as string,
      head as string,
      eyes as string,
      ear as string,
      mouth as string,
      breast as string,
      respiratory as string,
      gastro as string,
      guneto as string,
      meskal as string,
      nervous as string,
      examinedBy as string
     )
    }
}


