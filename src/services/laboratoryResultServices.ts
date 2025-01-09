import { LaboratoryResultEntity } from "../core/entities/laboratoryResult.entities";
import { AppError } from "../core/errors/custom.errors";
import { LaboratoryResultModel } from "../models/laboratoryResultModel";


export class LaboratoryResultService {
  public async createLaboratoryResult(
    visitId: number,
    wbc: string,
    Hgn: string,
    ESR: string,
    BF: string,
    bloodGroup_RHType: string,
    bloodMorphology: string,
    neutrophil: string,
    eosinophil: string,
    lymphocyte: string,
    monocyte: string,
    Basophil: string,
    FBS_RBS: string,
    sgot: string,
    sgpt: string,
    totalProtien: string,
    albumin: string,
    glucose: string,
    ketone: string,
    blood: string,
    leukocyte: string,
    bilirubin: string,
    urobilin: string,
    PH: string,
    microscopic: string,
    widal: string,
    weilFelix: string,
    VDHL_EPR: string,
    Rf: string,
    HBsAg: string,
    Aso: string,
    PICT: string,
    HCV: string,
    wetMount: string,
    gramStain: string,
    AFBStain: string,
    pregnancyTest: string,
    KOH: string,
    SKINSmear: string,
    protein: string,
    WBC: string,
    DiffCount: string,
    stoolExam: string,
    HIV: string,
    xRay: number,
    ultraSound: number,
   ): Promise<LaboratoryResultEntity> {
   const labOResult = await LaboratoryResultModel.create({
    visitId,
    wbc,
    Hgn,
    ESR,
    BF,
    bloodGroup_RHType,
    bloodMorphology,
    neutrophil, 
    eosinophil, 
    lymphocyte, 
    monocyte, 
    Basophil, 
    FBS_RBS,
    sgot,
    sgpt,
    totalProtien,
    albumin,
    glucose,
    ketone,
    blood,
    leukocyte,
    bilirubin,
    urobilin,
    PH,
    microscopic,
    widal,
    weilFelix,
    VDHL_EPR,
    Rf,
    HBsAg,
    Aso,
    PICT,
    HCV,
    wetMount,
    gramStain,
    AFBStain,
    pregnancyTest,
    KOH,
    SKINSmear,
    protein,
    WBC,
    DiffCount,
    stoolExam,
    HIV,
    xRay,
    ultraSound
  });

  return labOResult; 
}

  public async updatelabResult(
    id: number, 
    wbc: string,
    Hgn: string,
    ESR: string,
    BF: string,
    bloodGroup_RHType: string,
    bloodMorphology: string,
    neutrophil: string,
    eosinophil: string,
    lymphocyte: string,
    monocyte: string,
    Basophil: string,
    FBS_RBS: string,
    sgot: string,
    sgpt: string,
    totalProtien: string,
    albumin: string,
    glucose: string,
    ketone: string,
    blood: string,
    leukocyte: string,
    bilirubin: string,
    urobilin: string,
    PH: string,
    microscopic: string,
    widal: string,
    weilFelix: string,
    VDHL_EPR: string,
    Rf: string,
    HBsAg: string,
    Aso: string,
    PICT: string,
    HCV: string,
    wetMount: string,
    gramStain: string,
    AFBStain: string,
    pregnancyTest: string,
    KOH: string,
    SKINSmear: string,
    protein: string,
    WBC: string,
    DiffCount: string,
    stoolExam: string,
    HIV: string,
    xRay: number,
    ultraSound: number,
  ):Promise<LaboratoryResultEntity>{
    const labResult = await LaboratoryResultModel.findOne(
      {where:{id}}
    );

    if (!labResult){
      throw AppError.notFound("no result");
    }
    console.log("lab result", labResult)

    labResult.wbc = wbc ?? labResult.wbc
    labResult.Hgn = Hgn ?? labResult.Hgn
    labResult.ESR = ESR ?? labResult.ESR
    labResult.BF = BF ?? labResult.BF
    labResult.bloodGroup_RHType = bloodGroup_RHType ?? labResult.bloodGroup_RHType
    labResult.bloodMorphology = bloodMorphology ?? labResult.bloodMorphology
    labResult.neutrophil = neutrophil ?? labResult.neutrophil
    labResult.eosinophil = eosinophil ?? labResult.eosinophil
    labResult.lymphocyte = lymphocyte ?? labResult.lymphocyte
    labResult.monocyte = monocyte ?? labResult.monocyte
    labResult.Basophil = Basophil ?? labResult.Basophil
    labResult.FBS_RBS = FBS_RBS ?? labResult.FBS_RBS
    labResult.sgot = sgot ?? labResult.sgot
    labResult.sgpt = sgpt ?? labResult.sgpt
    labResult.totalProtien = totalProtien ?? labResult.totalProtien
    labResult.albumin = albumin ?? labResult.albumin
    labResult.glucose = glucose ?? labResult.glucose
    labResult.ketone = ketone ?? labResult.ketone
    labResult.blood = blood ?? labResult.blood
    labResult.leukocyte = leukocyte ?? labResult.leukocyte
    labResult.bilirubin = bilirubin ?? labResult.bilirubin
    labResult.urobilin = urobilin ?? labResult.urobilin
    labResult.PH = PH ?? labResult.PH
    labResult.microscopic = microscopic ?? labResult.microscopic
    labResult.widal = widal ?? labResult.widal
    labResult.weilFelix = weilFelix ?? labResult.weilFelix
    labResult.VDHL_EPR = VDHL_EPR ?? labResult.VDHL_EPR
    labResult.Rf = Rf ?? labResult.Rf
    labResult.HBsAg = HBsAg ?? labResult.HBsAg
    labResult.Aso = Aso ?? labResult.Aso
    labResult.PICT = PICT ?? labResult.PICT
    labResult.HCV = HCV ?? labResult.HCV
    labResult.wetMount = wetMount ?? labResult.wetMount
    labResult.gramStain = gramStain ?? labResult.gramStain
    labResult.AFBStain = AFBStain ?? labResult.AFBStain
    labResult.pregnancyTest = pregnancyTest ?? labResult.pregnancyTest
    labResult.KOH = KOH ?? labResult.KOH
    labResult.SKINSmear = SKINSmear ?? labResult.SKINSmear
    labResult.protein = protein ?? labResult.protein
    labResult.WBC = WBC ?? labResult.WBC
    labResult.DiffCount = DiffCount ?? labResult.DiffCount
    labResult.stoolExam = stoolExam ?? labResult.stoolExam
    labResult.HIV = HIV ?? labResult.HIV
    labResult.xRay = xRay ?? labResult.xRay
    labResult.ultraSound = ultraSound ?? labResult.ultraSound
    
      await labResult.save();
      console.log("updated labResult", labResult)
      return labResult;
    }

    public async getlabResult(id: number): Promise<LaboratoryResultEntity>{
    
        const result = await LaboratoryResultModel.findOne({
          where: {id}
        })
        if(!result){
          throw AppError.notFound("No lab result with this id")
        }
        return result
      }

    public async deletelabResult(id: number): Promise<boolean>{
    
        const deletedCount = await LaboratoryResultModel.destroy({
          where: {id}
        })
        return deletedCount > 0
      }
    
}
