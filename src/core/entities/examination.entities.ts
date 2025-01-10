import { ExaminationModel } from "../../models/examinationModel";
import { PreExaminationModel } from "../../models/preExaminationModel";

export class ExaminationEntity{
  public symptoms: string; 
  public bloodPressure: string; 
  public bodyTemperature: string; 
  public respirationRate: string; 
  public oxygenSaturation: string; 
  public weight: number; 
  public height: number;

 constructor( 
  symptoms: string,
  bloodPressure: string,
  bodyTemperature: string,
  respirationRate: string,
  oxygenSaturation: string,
  weight: number,
  height: number
  ){
    this.symptoms = symptoms, 
    this.bloodPressure = bloodPressure, 
    this.bodyTemperature = bodyTemperature, 
    this.respirationRate = respirationRate, 
    this.oxygenSaturation = oxygenSaturation, 
    this.weight = weight, 
    this.height = height
    
  }

    public static fromDatabase(obj: ExaminationModel) :ExaminationEntity{
     const{
      symptoms,
      bloodPressure,
      bodyTemperature,
      respirationRate,
      oxygenSaturation,
      weight,
      height
       } = obj

     return new ExaminationEntity(
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


