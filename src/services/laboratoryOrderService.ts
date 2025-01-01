import { AppError } from "../core/errors/custom.errors";
import { LaboratoryOrderModel } from "../models/laboratoryOrderModel";


export class LaboratoryOrderService {
  public async createLaboratoryOrder(
    visitId: number,
    wbc: boolean,
    Hgn: boolean,
    ESR: boolean,
    BF: boolean,
    bloodGroup_RHType: boolean,
    bloodMorphology: boolean,
    neutrophil: boolean,
    eosinophil: boolean,
    lymphocyte: boolean,
    monocyte: boolean,
    Basophil: boolean,
    FBS_RBS: boolean,
    sgot: boolean,
    sgpt: boolean,
    totalProtein: boolean,
    albumin: boolean,
    glucose: boolean,
    ketone: boolean,
    blood: boolean,
    leukocyte: boolean,
    bilirubin: boolean,
    urobilin: boolean,
    PH: boolean,
    microscopic: boolean,
    widal: boolean,
    WeilFelix: boolean,
    VDHL_EPR: boolean,
    Rf: boolean,
    HBsAg: boolean,
    Aso: boolean,
    PICT: boolean,
    HCV: boolean,
    wetMount: boolean,
    gramStain: boolean,
    AFBStain: boolean,
    pregnancyTest: boolean,
    KOH: boolean,
    SKINSmear: boolean,
    protein: boolean,
    WBC: boolean,
    DiffCount: boolean,
    stoolExam: boolean,
    HIV: boolean,
    xRay: boolean,
    ultrasound: boolean,
   ): Promise<laboratoryOrderEntity> {
   const labOrder = await LaboratoryOrderModel.create({
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
    totalProtein,
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
    WeilFelix,
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
    ultrasound
  });

  return labOrder 
}

  public async updateLabOrder(
    wbc: boolean,
    Hgn: boolean,
    ESR: boolean,
    BF: boolean,
    bloodGroup_RHType: boolean,
    bloodMorphology: boolean,
    neutrophil: boolean,
    eosinophil: boolean,
    lymphocyte: boolean,
    monocyte: boolean,
    Basophil: boolean,
    FBS_RBS: boolean,
    sgot: boolean,
    sgpt: boolean,
    totalProtein: boolean,
    albumin: boolean,
    glucose: boolean,
    ketone: boolean,
    blood: boolean,
    leukocyte: boolean,
    bilirubin: boolean,
    urobilin: boolean,
    PH: boolean,
    microscopic: boolean,
    widal: boolean,
    WeilFelix: boolean,
    VDHL_EPR: boolean,
    Rf: boolean,
    HBsAg: boolean,
    Aso: boolean,
    PICT: boolean,
    HCV: boolean,
    wetMount: boolean,
    gramStain: boolean,
    AFBStain: boolean,
    pregnancyTest: boolean,
    KOH: boolean,
    SKINSmear: boolean,
    protein: boolean,
    WBC: boolean,
    DiffCount: boolean,
    stoolExam: boolean,
    HIV: boolean,
    xRay: boolean,
    ultrasound: boolean,
  ):Promise<laboratoryOrderEntity>{
      const labOrder = await LaboratoryOrderModel.findOne(
        {
          where:{id},
        attributes: [
        "wbc",
        "Hgn",
        "ESR",
        "BF",
        "bloodGroup_RHType",
        "bloodMorphology",
        "neutrophil",
        "eosinophil",
        "lymphocyte",
        "monocyte",
        "Basophil",
        "FBS_RBS",
        "sgot",
        "sgpt",
        "totalProtein",
        "albumin",
        "glucose",
        "ketone",
        "blood",
        "leukocyte",
        "bilirubin",
        "urobilin",
        "PH",
        "microscopic",
        "widal",
        "WeilFelix",
        "VDHL_EPR",
        "Rf",
        "HBsAg",
        "Aso",
        "PICT",
        "HCV",
        "wetMount",
        "gramStain",
        "AFBStain",
        "pregnancyTest",
        "KOH",
        "SKINSmear",
        "protein",
        "WBC",
        "DiffCount",
        "stoolExam",
        "HIV",
        "xRay",
        "ultrasound"
      ]
      },
      );
       
      if (!labOrder){
        throw AppError.notFound("no order with this id")
      }
        labOrder.wbc = wbc || labOrder.wbc
        labOrder.Hgn = Hgn || labOrder.Hgn
        labOrder.ESR = ESR || labOrder.ESR
        labOrder.BF = BF || labOrder.BF
        labOrder.bloodGroup_RHType = bloodGroup_RHType || labOrder.bloodGroup_RHType
        labOrder.bloodMorphology = bloodMorphology || labOrder.bloodMorphology
        labOrder.neutrophil = neutrophil || labOrder.neutrophil
        labOrder.eosinophil = eosinophil || labOrder.eosinophil
        labOrder.lymphocyte = lymphocyte || labOrder.lymphocyte
        labOrder.monocyte = monocyte || labOrder.monocyte
        labOrder.Basophil = Basophil || labOrder.Basophil
        labOrder.FBS_RBS = FBS_RBS || labOrder.FBS_RBS
        labOrder.sgot = sgot || labOrder.sgot
        labOrder.sgpt = sgpt || labOrder.sgpt
        labOrder.totalProtein = totalProtein || labOrder.totalProtein
        labOrder.albumin = albumin || labOrder.albumin
        labOrder.glucose = glucose || labOrder.glucose
        labOrder.ketone = ketone || labOrder.ketone
        labOrder.blood = blood || labOrder.blood
        labOrder.leukocyte = leukocyte || labOrder.leukocyte
        labOrder.bilirubin = bilirubin || labOrder.bilirubin
        labOrder.urobilin = urobilin || labOrder.urobilin
        labOrder.PH = PH || labOrder.PH
        labOrder.microscopic = microscopic || labOrder.microscopic
        labOrder.widal = widal || labOrder.widal
        labOrder.WeilFelix = WeilFelix || labOrder.WeilFelix
        labOrder.VDHL_EPR = VDHL_EPR || labOrder.VDHL_EPR
        labOrder.Rf = Rf || labOrder.Rf
        labOrder.HBsAg = HBsAg || labOrder.HBsAg
        labOrder.Aso = Aso || labOrder.Aso
        labOrder.PICT = PICT || labOrder.PICT
        labOrder.HCV = HCV || labOrder.HCV
        labOrder.wetMount = wetMount || labOrder.wetMount
        labOrder.gramStain = gramStain || labOrder.gramStain
        labOrder.AFBStain = AFBStain || labOrder.AFBStain
        labOrder.pregnancyTest = pregnancyTest || labOrder.pregnancyTest
        labOrder.KOH = KOH || labOrder.KOH
        labOrder.SKINSmear = SKINSmear || labOrder.SKINSmear
        labOrder.protein = protein || labOrder.protein
        labOrder.WBC = WBC || labOrder.WBC
        labOrder.DiffCount = DiffCount || labOrder.DiffCount
        labOrder.stoolExam = stoolExam || labOrder.stoolExam
        labOrder.HIV = HIV || labOrder.HIV
        labOrder.xRay = xRay || labOrder.xRay
        labOrder.ultrasound = ultrasound || labOrder.ultrasound
      
      await labOrder.save();

      return labOrder;
    }  

    public async getLabOrder(id: number): Promise<laboratoryOrderEntity>{
    
        const order = await LaboratoryOrderModel.findOne({
          where: {id}
        })
        if(!order){
          throw AppError.notFound("No lab order with thid id")
        }
        return order
      }

    public async deleteLabOrder(id: number): Promise<boolean>{
    
        const deletedCount = await LaboratoryOrderModel.destroy({
          where: {id}
        })
        return deletedCount > 0
      }
    
}
