import { XrayEntity } from "../core/entities/xray.entites";
import { AppError } from "../core/errors/custom.errors";
import { XrayModel } from "../models/xrayModel";


export class XrayService {

  public async createXray(
    bodyPart: string,
    exposureSettings: string,
    imageFilePath: string,
    findings: string,
    diagnosis: string,
    technician: string,
  ): Promise<XrayEntity> {

   const xray = await XrayModel.create({
    bodyPart,
    exposureSettings,
    imageFilePath,
    findings,
    diagnosis,
    technician,
   });
   console.log("xray", xray)

  return xray;
}

  public async updateXray(
      id: number,
      bodyPart: string,
      exposureSettings: string,
      imageFilePath: string,
      findings: string,
      diagnosis: string,
      technician: string,
    ):Promise<XrayEntity>
    {
        const xray = await XrayModel.findOne({where:{id}});        
        if (!xray){
          throw AppError.notFound;
        }

        xray.bodyPart = bodyPart ?? xray.bodyPart;
        xray.exposureSettings = exposureSettings ?? xray.exposureSettings;
        xray.imageFilePath = imageFilePath ?? xray.imageFilePath;
        xray.findings = findings ?? xray.findings;
        xray.diagnosis = diagnosis ?? xray.diagnosis;
        xray.technician = technician ?? xray.technician;
        
        await xray.save();
        return xray;
      }  

  public async getXray(id: number): Promise<XrayEntity>{
        const xray = await XrayModel.findOne({where: {id}})

        if(!xray){
          throw AppError.notFound;
        }
        return xray;
    }

  public async getAllXrays(): Promise<XrayEntity[]>{
      const xrays = await XrayModel.findAll()

      if(!xrays){
        throw AppError.notFound
      }
  
      console.log("xrays", xrays)
      return xrays

  }

    public async deleteXray(id: number): Promise<boolean>{
        const deletedCount = await XrayModel.destroy({
          where: {id}
        })
        return deletedCount > 0
    }
}
