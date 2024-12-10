import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface LaboratoryOrderModelRow
{
  wbc?: Boolean;
  Hgn?: Boolean;
  ESR?: Boolean;
  BF?: Boolean;
  bloodGroup_RHType?: Boolean;
  bloodMorphology?: Boolean;
  neutorophil?: Boolean; 
  eosinophil?: Boolean; 
  lymphocyte?: Boolean; 
  monocyte?: Boolean; 
  Basophil?: Boolean; 
  FBS_RBS?: Boolean;
  sgot?: Boolean;
  sgpt?: Boolean;
  totalProtien?: Boolean;
  albumin?: Boolean;
  glucose?: Boolean;
  ketone?: Boolean;
  blood?: Boolean;
  leukocyte?: Boolean;
  bilurubin?: Boolean;
  urobilin?: Boolean;
  PH?: Boolean;
  microscopic?: Boolean;
  widal?: Boolean;
  wielFelix?: Boolean;
  VDHL_EPR?: Boolean;
  Rf?: Boolean;
  HBsAg?: Boolean;
  Aso?: Boolean;
  PICT?: Boolean;
  HCV?: Boolean;
  wetMount?: Boolean;
  gramStaint?: Boolean;
  AFBStaint?: Boolean;
  pregnancyTest?: Boolean;
  KOH?: Boolean;
  SKINSmear?: Boolean;
  protein?: Boolean;
  gramStam?: Boolean;
  AFBStam?: Boolean;
  WBC?: Boolean;
  Diff_Count?: Boolean;
  stoolExam?: Boolean;
  HIV?: Boolean;
  xRay: boolean;
  ultrasound: boolean;
}
export class LaboratoryOrderModel extends Model<LaboratoryOrderModelRow> {
  declare wbc: CreationOptional<Boolean>;
  declare Hgn: CreationOptional<Boolean>;
  declare ESR: CreationOptional<Boolean>;
  declare BF: CreationOptional<Boolean>;
  declare bloodGroup_RHType: CreationOptional<Boolean>;
  declare bloodMorphology: CreationOptional<Boolean>;
  declare neutorophil: CreationOptional<Boolean>;
  declare eosinophil: CreationOptional<Boolean>;
  declare lymphocyte: CreationOptional<Boolean>;
  declare monocyte: CreationOptional<Boolean>;
  declare Basophil: CreationOptional<Boolean>;
  declare FBS_RBS: CreationOptional<Boolean>;
  declare sgot: CreationOptional<Boolean>;
  declare sgpt: CreationOptional<Boolean>;
  declare totalProtien: CreationOptional<Boolean>;
  declare albumin: CreationOptional<Boolean>;
  declare glucose: CreationOptional<Boolean>;
  declare ketone: CreationOptional<Boolean>;
  declare blood: CreationOptional<Boolean>;
  declare leukocyte: CreationOptional<Boolean>;
  declare bilurubin: CreationOptional<Boolean>;
  declare urobilin: CreationOptional<Boolean>;
  declare PH: CreationOptional<Boolean>;
  declare microscopic: CreationOptional<Boolean>;
  declare widal: CreationOptional<Boolean>;
  declare wielFelix: CreationOptional<Boolean>;
  declare VDHL_EPR: CreationOptional<Boolean>;
  declare Rf: CreationOptional<Boolean>;
  declare HBsAg: CreationOptional<Boolean>;
  declare Aso: CreationOptional<Boolean>;
  declare PICT: CreationOptional<Boolean>;
  declare HCV: CreationOptional<Boolean>;
  declare wetMount: CreationOptional<Boolean>;
  declare gramStaint: CreationOptional<Boolean>;
  declare AFBStaint: CreationOptional<Boolean>;
  declare pregnancyTest: CreationOptional<Boolean>;
  declare KOH: CreationOptional<Boolean>;
  declare SKINSmear: CreationOptional<Boolean>;
  declare protein: CreationOptional<Boolean>;
  declare gramStam: CreationOptional<Boolean>;
  declare AFBStam: CreationOptional<Boolean>;
  declare WBC: CreationOptional<Boolean>;
  declare Diff_Count: CreationOptional<Boolean>;
  declare stoolExam: CreationOptional<Boolean>;
  declare HIV: CreationOptional<Boolean>;
  declare xRay: CreationOptional<Boolean>
  declare ultrasound:CreationOptional<Boolean>;
}

LaboratoryOrderModel.init({
  wbc: {
    type: DataTypes.BOOLEAN
  },
  Hgn: {
    type: DataTypes.BOOLEAN
  },
  ESR: {
    type: DataTypes.BOOLEAN
  },
  BF: {
    type: DataTypes.BOOLEAN
  },
  bloodGroup_RHType: {
    type: DataTypes.BOOLEAN
  },
  bloodMorphology: {
    type: DataTypes.BOOLEAN
  },
  neutorophil: {
    type: DataTypes.BOOLEAN
  },
  eosinophil: {
    type: DataTypes.BOOLEAN
  },
  lymphocyte: {
    type: DataTypes.BOOLEAN
  },
  monocyte: {
    type: DataTypes.BOOLEAN
  },
  Basophil: {
    type: DataTypes.BOOLEAN
  },
  FBS_RBS: {
    type: DataTypes.BOOLEAN
  },
  sgot: {
    type: DataTypes.BOOLEAN
  },
  sgpt: {
    type: DataTypes.BOOLEAN
  },
  totalProtien: {
    type: DataTypes.BOOLEAN
  },
  albumin: {
    type: DataTypes.BOOLEAN
  },
  glucose: {
    type: DataTypes.BOOLEAN
  },
  ketone: {
    type: DataTypes.BOOLEAN
  },
  blood: {
    type: DataTypes.BOOLEAN
  },
  leukocyte: {
    type: DataTypes.BOOLEAN
  },
  bilurubin: {
    type: DataTypes.BOOLEAN
  },
  urobilin: {
    type: DataTypes.BOOLEAN
  },
  PH: {
    type: DataTypes.BOOLEAN
  },
  microscopic: {
    type: DataTypes.BOOLEAN
  },
  widal: {
    type: DataTypes.BOOLEAN
  },
  wielFelix: {
    type: DataTypes.BOOLEAN
  },
  VDHL_EPR: {
    type: DataTypes.BOOLEAN
  },
  Rf: {
    type: DataTypes.BOOLEAN
  },
  HBsAg: {
    type: DataTypes.BOOLEAN
  },
  Aso: {
    type: DataTypes.BOOLEAN
  },
  PICT: {
    type: DataTypes.BOOLEAN
  },
  HCV: {
    type: DataTypes.BOOLEAN
  },
  wetMount: {
    type: DataTypes.BOOLEAN
  },
  gramStaint: {
    type: DataTypes.BOOLEAN
  },
  AFBStaint: {
    type: DataTypes.BOOLEAN
  },
  pregnancyTest: {
    type: DataTypes.BOOLEAN
  },
  KOH: {
    type: DataTypes.BOOLEAN
  },
  SKINSmear: {
    type: DataTypes.BOOLEAN
  },
  protein: {
    type: DataTypes.BOOLEAN
  },
  gramStam: {
    type: DataTypes.BOOLEAN
  },
  AFBStam: {
    type: DataTypes.BOOLEAN
  },
  WBC: {
    type: DataTypes.BOOLEAN
  },
  Diff_Count: {
    type: DataTypes.BOOLEAN
  },
  stoolExam: {
    type: DataTypes.BOOLEAN
  },
  HIV: {
    type: DataTypes.BOOLEAN
  },
  xRay: {
    type: DataTypes.BOOLEAN
  },  
  ultrasound: {
    type: DataTypes.BOOLEAN
  },
  }, {
    sequelize,
    timestamps: true,
    tableName: 'laboratory_orders',
    paranoid: true,
    deletedAt: true
});


  