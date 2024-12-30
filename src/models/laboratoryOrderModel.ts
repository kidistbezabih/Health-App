import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface LaboratoryOrderModelRow {
  visitId: number;
  wbc?: boolean;
  Hgn?: boolean;
  ESR?: boolean;
  BF?: boolean;
  bloodGroup_RHType?: boolean;
  bloodMorphology?: boolean;
  neutrophil?: boolean; 
  eosinophil?: boolean; 
  lymphocyte?: boolean; 
  monocyte?: boolean; 
  Basophil?: boolean; 
  FBS_RBS?: boolean;
  sgot?: boolean;
  sgpt?: boolean;
  totalProtein?: boolean;
  albumin?: boolean;
  glucose?: boolean;
  ketone?: boolean;
  blood?: boolean;
  leukocyte?: boolean;
  bilirubin?: boolean;
  urobilin?: boolean;
  PH?: boolean;
  microscopic?: boolean;
  widal?: boolean;
  WeilFelix?: boolean;
  VDHL_EPR?: boolean;
  Rf?: boolean;
  HBsAg?: boolean;
  Aso?: boolean;
  PICT?: boolean;
  HCV?: boolean;
  wetMount?: boolean;
  gramStain?: boolean;
  AFBStain?: boolean;
  pregnancyTest?: boolean;
  KOH?: boolean;
  SKINSmear?: boolean;
  protein?: boolean;
  WBC?: boolean;
  Diff_Count?: boolean;
  stoolExam?: boolean;
  HIV?: boolean;
  xRay: boolean;
  ultrasound: boolean;
}

export class LaboratoryOrderModel extends Model<LaboratoryOrderModelRow> {
  declare visitId: ForeignKey<number>;
  declare wbc: CreationOptional<boolean>;
  declare Hgn: CreationOptional<boolean>;
  declare ESR: CreationOptional<boolean>;
  declare BF: CreationOptional<boolean>;
  declare bloodGroup_RHType: CreationOptional<boolean>;
  declare bloodMorphology: CreationOptional<boolean>;
  declare neutrophil: CreationOptional<boolean>;
  declare eosinophil: CreationOptional<boolean>;
  declare lymphocyte: CreationOptional<boolean>;
  declare monocyte: CreationOptional<boolean>;
  declare Basophil: CreationOptional<boolean>;
  declare FBS_RBS: CreationOptional<boolean>;
  declare sgot: CreationOptional<boolean>;
  declare sgpt: CreationOptional<boolean>;
  declare totalProtein: CreationOptional<boolean>;
  declare albumin: CreationOptional<boolean>;
  declare glucose: CreationOptional<boolean>;
  declare ketone: CreationOptional<boolean>;
  declare blood: CreationOptional<boolean>;
  declare leukocyte: CreationOptional<boolean>;
  declare bilirubin: CreationOptional<boolean>;
  declare urobilin: CreationOptional<boolean>;
  declare PH: CreationOptional<boolean>;
  declare microscopic: CreationOptional<boolean>;
  declare widal: CreationOptional<boolean>;
  declare WeilFelix: CreationOptional<boolean>;
  declare VDHL_EPR: CreationOptional<boolean>;
  declare Rf: CreationOptional<boolean>;
  declare HBsAg: CreationOptional<boolean>;
  declare Aso: CreationOptional<boolean>;
  declare PICT: CreationOptional<boolean>;
  declare HCV: CreationOptional<boolean>;
  declare wetMount: CreationOptional<boolean>;
  declare gramStain: CreationOptional<boolean>;
  declare AFBStain: CreationOptional<boolean>;
  declare pregnancyTest: CreationOptional<boolean>;
  declare KOH: CreationOptional<boolean>;
  declare SKINSmear: CreationOptional<boolean>;
  declare protein: CreationOptional<boolean>;
  declare WBC: CreationOptional<boolean>;
  declare Diff_Count: CreationOptional<boolean>;
  declare stoolExam: CreationOptional<boolean>;
  declare HIV: CreationOptional<boolean>;
  declare xRay: CreationOptional<boolean>;
  declare ultrasound: CreationOptional<boolean>;
}

LaboratoryOrderModel.init({
  visitId: {type: DataTypes.INTEGER},
  wbc: { type: DataTypes.BOOLEAN },
  Hgn: { type: DataTypes.BOOLEAN },
  ESR: { type: DataTypes.BOOLEAN },
  BF: { type: DataTypes.BOOLEAN },
  bloodGroup_RHType: { type: DataTypes.BOOLEAN },
  bloodMorphology: { type: DataTypes.BOOLEAN },
  neutrophil: { type: DataTypes.BOOLEAN },
  eosinophil: { type: DataTypes.BOOLEAN },
  lymphocyte: { type: DataTypes.BOOLEAN },
  monocyte: { type: DataTypes.BOOLEAN },
  Basophil: { type: DataTypes.BOOLEAN },
  FBS_RBS: { type: DataTypes.BOOLEAN },
  sgot: { type: DataTypes.BOOLEAN },
  sgpt: { type: DataTypes.BOOLEAN },
  totalProtein: { type: DataTypes.BOOLEAN },
  albumin: { type: DataTypes.BOOLEAN },
  glucose: { type: DataTypes.BOOLEAN },
  ketone: { type: DataTypes.BOOLEAN },
  blood: { type: DataTypes.BOOLEAN },
  leukocyte: { type: DataTypes.BOOLEAN },
  bilirubin: { type: DataTypes.BOOLEAN },
  urobilin: { type: DataTypes.BOOLEAN },
  PH: { type: DataTypes.BOOLEAN },
  microscopic: { type: DataTypes.BOOLEAN },
  widal: { type: DataTypes.BOOLEAN },
  WeilFelix: { type: DataTypes.BOOLEAN },
  VDHL_EPR: { type: DataTypes.BOOLEAN },
  Rf: { type: DataTypes.BOOLEAN },
  HBsAg: { type: DataTypes.BOOLEAN },
  Aso: { type: DataTypes.BOOLEAN },
  PICT: { type: DataTypes.BOOLEAN },
  HCV: { type: DataTypes.BOOLEAN },
  wetMount: { type: DataTypes.BOOLEAN },
  gramStain: { type: DataTypes.BOOLEAN },
  AFBStain: { type: DataTypes.BOOLEAN },
  pregnancyTest: { type: DataTypes.BOOLEAN },
  KOH: { type: DataTypes.BOOLEAN },
  SKINSmear: { type: DataTypes.BOOLEAN },
  protein: { type: DataTypes.BOOLEAN },
  WBC: { type: DataTypes.BOOLEAN },
  Diff_Count: { type: DataTypes.BOOLEAN },
  stoolExam: { type: DataTypes.BOOLEAN },
  HIV: { type: DataTypes.BOOLEAN },
  xRay: { type: DataTypes.BOOLEAN },
  ultrasound: { type: DataTypes.BOOLEAN },
}, {
  sequelize,
  timestamps: true,
  tableName: 'laboratory_orders',
  paranoid: true,
  deletedAt: true,
});
