import { UltraSoundEntity } from "../core/entities/ultraSound.entities";
import { AppError } from "../core/errors/custom.errors";
import { UltraSoundModel } from "../models/ultraSoundModel";


export class UltraSoundService {

  public async createUltraSound(
    examType: string,
    notes: string,
    imageFilePath: string,
    findings: string,
    diagnosis: string,
    technician: string,
    ): Promise<UltraSoundEntity> 
  {
    const ultraSound = await UltraSoundModel.create({
      examType,
      notes,
      imageFilePath,
      findings,
      diagnosis,
      technician,
    });
    return UltraSoundEntity.fromDatabase(ultraSound);
  }

  public async getUltraSound(id: number): Promise<UltraSoundEntity>{
      const ultraSound = await UltraSoundModel.findOne({where: {id}})

      if(!ultraSound){
        throw AppError.notFound;
      }
      return ultraSound;
  }

  public async getAllUltraSound(): Promise<UltraSoundEntity[]>{
    const ultraSounds = await UltraSoundModel.findAll()
    if(!ultraSounds){
      throw AppError.notFound
    }
    console.log("Ultra sound",ultraSounds)
    return ultraSounds
  }

  public async updateUltraSound(
    id: number,
    examType: string,
    notes: string,
    imageFilePath: string,
    findings: string,
    diagnosis: string,
    technician: string,
  ):Promise<UltraSoundEntity>{
    const ultraSound = await UltraSoundModel.findOne({where:{id}});        
    if (!ultraSound){
      throw AppError.notFound;
    }
    ultraSound.examType = examType ?? ultraSound.examType;
    ultraSound.notes = notes ?? ultraSound.notes;
    ultraSound.imageFilePath = imageFilePath ?? ultraSound.imageFilePath;
    ultraSound.findings = findings ?? ultraSound.findings;
    ultraSound.diagnosis = diagnosis ?? ultraSound.diagnosis;
    ultraSound.technician = technician ?? ultraSound.technician;
    
    await ultraSound.save();

    console.log("ultraSound", ultraSound)
    return ultraSound;
  }

  public async deleteUltraSound(id: number): Promise<boolean>{
      const deletedCount = await UltraSoundModel.destroy({
        where: {id}
      })
      return deletedCount > 0
  }
}
