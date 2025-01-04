import { ExaminationModel } from "../../models/examinationModel";
import { PreExaminationModel } from "../../models/preExaminationModel";

export class ExaminationEntity{
 constructor( 
  visitId: number,
  symptoms: string,
  bloodPressure: string,
  bodyTemperature: string,
  respirationRate: string,
  oxygenSaturation: string,
  weight: number,
  height: number
  ){
    
  }

    public static fromDatabase(obj: ExaminationModel) :ExaminationEntity{
     const{
      visitId,
      symptoms,
      bloodPressure,
      bodyTemperature,
      respirationRate,
      oxygenSaturation,
      weight,
      height
       } = obj

     return new ExaminationEntity(
      visitId as number,
      symptoms as string,
      bloodPressure as string,
      bodyTemperature as string,
      respirationRate as string,
      oxygenSaturation as string,
      weight as number,
      height as number,
     )
    }
}


