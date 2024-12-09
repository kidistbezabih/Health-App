import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface LaboratoryModelRow{
  id : number;
  cardNumber: number;
  wbc: string;
  Hgn: string;
  ESR: string;
  BF: string;
  bloodGroup_RHType: string;
  bloodMorphology: string;
  neutorophil: string; 
  eosinophil: string; 
  lymphocyte: string; 
  monocyte: string; 
  Basophil: string; 
  FBS_RBS: string;
  sgot: string;
  sgpt: string;
  totalProtien: string;
  albumin: string;
  glucose: string;
  ketone: string;
  blood: string;
  leukocyte: string;
  bilurubin: string;
  urobilin: string;
  PH: string;
  microscopic: string;
  widal: string;
  wielFelix: string;
  VDHL_EPR: string;
  Rf: string;
  HBsAg: string;
  Aso: string;
  PICT: string;
  HCV: string;
  wetMount: string;
  gramStaint: string;
  AFBStaint: string;
  pregnancyTest: string;
  KOH: string;
  SKINSmear: string;
  protein: string
  gramStam: string
  AFBStam: string
  WBC: string
  Diff_Count: string
  stoolExam: string;
  HIV: string;
  sign: string;
}

export class LaboratoryResultModel extends Model<LaboratoryModelRow, Omit<LaboratoryModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare cardNumber: number;
  declare wbc: string;
  declare Hgn: string;
  declare ESR: string;
  declare BF: string;
  declare bloodGroup_RHType: string;
  declare bloodMorphology: string;
  declare neutorophil: string; 
  declare eosinophil: string; 
  declare lymphocyte: string; 
  declare monocyte: string; 
  declare Basophil: string; 
  declare FBS_RBS: string;
  declare sgot: string;
  declare sgpt: string;
  declare totalProtien: string;
  declare albumin: string;
  declare glucose: string;
  declare ketone: string;
  declare blood: string;
  declare leukocyte: string;
  declare bilurubin: string;
  declare urobilin: string;
  declare PH: string;
  declare microscopic: string;
  declare widal: string;
  declare wielFelix: string;
  declare VDHL_EPR: string;
  declare Rf: string;
  declare HBsAg: string;
  declare Aso: string;
  declare PICT: string;
  declare HCV: string;
  declare wetMount: string;
  declare gramStaint: string;
  declare AFBStaint: string;
  declare pregnancyTest: string;
  declare KOH: string;
  declare SKINSmear: string;
  declare protein: string
  declare gramStam: string
  declare AFBStam: string
  declare WBC: string
  declare Diff_Count: string
  declare stoolExam: string;
  declare HIV: string;
  declare sign: string;
}

LaboratoryResultModel.init({
  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wbc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Hgn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ESR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BF: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bloodGroup_RHType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bloodMorphology: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  neutorophil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eosinophil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lymphocyte: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  monocyte: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Basophil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FBS_RBS: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sgot: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sgpt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalProtien: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  albumin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  glucose: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ketone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  blood: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  leukocyte: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bilurubin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  urobilin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PH: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  microscopic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  widal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wielFelix: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VDHL_EPR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Rf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HBsAg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Aso: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PICT: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HCV: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wetMount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gramStaint: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AFBStaint: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pregnancyTest: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  KOH: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SKINSmear: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  protein: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gramStam: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AFBStam: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  WBC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Diff_Count: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stoolExam: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HIV: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sign: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, 
  {
    sequelize,
    tableName: 'laboratory',
    timestamps: true
  });
