import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface LaboratoryResultModelRow {
  id?: number;
  visitId?: number;
  wbc?: string;
  Hgn?: string;
  ESR?: string;
  BF?: string;
  bloodGroup_RHType?: string;
  bloodMorphology?: string;
  neutrophil?: string;
  eosinophil?: string;
  lymphocyte?: string;
  monocyte?: string;
  Basophil?: string;
  FBS_RBS?: string;
  sgot?: string;
  sgpt?: string;
  totalProtien?: string;
  albumin?: string;
  glucose?: string;
  ketone?: string;
  blood?: string;
  leukocyte?: string;
  bilirubin?: string;
  urobilin?: string;
  PH?: string;
  microscopic?: string;
  widal?: string;
  weilFelix?: string;
  VDHL_EPR?: string;
  Rf?: string;
  HBsAg?: string;
  Aso?: string;
  PICT?: string;
  HCV?: string;
  wetMount?: string;
  gramStain?: string;
  AFBStain?: string;
  pregnancyTest?: string;
  KOH?: string;
  SKINSmear?: string;
  protein?: string;
  gramStam?: string;
  AFBStam?: string;
  WBC?: string;
  DiffCount?: string;
  stoolExam?: string;
  HIV?: string;
  xRay?: ForeignKey<number>;
  ultraSound?: ForeignKey<number>;
}

export class LaboratoryResultModel extends Model<LaboratoryResultModelRow> {
  declare id: number;
  declare visitId: ForeignKey<number>;
  declare wbc: CreationOptional<string>;
  declare Hgn: CreationOptional<string>;
  declare ESR: CreationOptional<string>;
  declare BF: CreationOptional<string>;
  declare bloodGroup_RHType: CreationOptional<string>;
  declare bloodMorphology: CreationOptional<string>;
  declare neutrophil: CreationOptional<string>;
  declare eosinophil: CreationOptional<string>;
  declare lymphocyte: CreationOptional<string>;
  declare monocyte: CreationOptional<string>;
  declare Basophil: CreationOptional<string>;
  declare FBS_RBS: CreationOptional<string>;
  declare sgot: CreationOptional<string>;
  declare sgpt: CreationOptional<string>;
  declare totalProtien: CreationOptional<string>;
  declare albumin: CreationOptional<string>;
  declare glucose: CreationOptional<string>;
  declare ketone: CreationOptional<string>;
  declare blood: CreationOptional<string>;
  declare leukocyte: CreationOptional<string>;
  declare bilirubin: CreationOptional<string>;
  declare urobilin: CreationOptional<string>;
  declare PH: CreationOptional<string>;
  declare microscopic: CreationOptional<string>;
  declare widal: CreationOptional<string>;
  declare weilFelix: CreationOptional<string>;
  declare VDHL_EPR: CreationOptional<string>;
  declare Rf: CreationOptional<string>;
  declare HBsAg: CreationOptional<string>;
  declare Aso: CreationOptional<string>;
  declare PICT: CreationOptional<string>;
  declare HCV: CreationOptional<string>;
  declare wetMount: CreationOptional<string>;
  declare gramStain: CreationOptional<string>;
  declare AFBStain: CreationOptional<string>;
  declare pregnancyTest: CreationOptional<string>;
  declare KOH: CreationOptional<string>;
  declare SKINSmear: CreationOptional<string>;
  declare protein: CreationOptional<string>;
  declare gramStam: CreationOptional<string>;
  declare AFBStam: CreationOptional<string>;
  declare WBC: CreationOptional<string>;
  declare DiffCount: CreationOptional<string>;
  declare stoolExam: CreationOptional<string>;
  declare HIV: CreationOptional<string>;
  declare xRay: ForeignKey<number>;
  declare ultraSound: ForeignKey<number>;
}

LaboratoryResultModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  visitId: {
    type: DataTypes.INTEGER
  },
  wbc: {
    type: DataTypes.STRING,
  },
  Hgn: {
    type: DataTypes.STRING,
  },
  ESR: {
    type: DataTypes.STRING,
  },
  BF: {
    type: DataTypes.STRING,
  },
  bloodGroup_RHType: {
    type: DataTypes.STRING,
  },
  bloodMorphology: {
    type: DataTypes.STRING,
  },
  neutrophil: {
    type: DataTypes.STRING,
  },
  eosinophil: {
    type: DataTypes.STRING,
  },
  lymphocyte: {
    type: DataTypes.STRING,
  },
  monocyte: {
    type: DataTypes.STRING,
  },
  Basophil: {
    type: DataTypes.STRING,
  },
  FBS_RBS: {
    type: DataTypes.STRING,
  },
  sgot: {
    type: DataTypes.STRING,
  },
  sgpt: {
    type: DataTypes.STRING,
  },
  totalProtien: {
    type: DataTypes.STRING,
  },
  albumin: {
    type: DataTypes.STRING,
  },
  glucose: {
    type: DataTypes.STRING,
  },
  ketone: {
    type: DataTypes.STRING,
  },
  blood: {
    type: DataTypes.STRING,
  },
  leukocyte: {
    type: DataTypes.STRING,
  },
  bilirubin: {
    type: DataTypes.STRING,
  },
  urobilin: {
    type: DataTypes.STRING,
  },
  PH: {
    type: DataTypes.STRING,
  },
  microscopic: {
    type: DataTypes.STRING,
  },
  widal: {
    type: DataTypes.STRING,
  },
  weilFelix: {
    type: DataTypes.STRING,
  },
  VDHL_EPR: {
    type: DataTypes.STRING,
  },
  Rf: {
    type: DataTypes.STRING,
  },
  HBsAg: {
    type: DataTypes.STRING,
  },
  Aso: {
    type: DataTypes.STRING,
  },
  PICT: {
    type: DataTypes.STRING,
  },
  HCV: {
    type: DataTypes.STRING,
  },
  wetMount: {
    type: DataTypes.STRING,
  },
  gramStain: {
    type: DataTypes.STRING,
  },
  AFBStain: {
    type: DataTypes.STRING,
  },
  pregnancyTest: {
    type: DataTypes.STRING,
  },
  KOH: {
    type: DataTypes.STRING,
  },
  SKINSmear: {
    type: DataTypes.STRING,
  },
  protein: {
    type: DataTypes.STRING,
  },
  gramStam: {
    type: DataTypes.STRING,
  },
  AFBStam: {
    type: DataTypes.STRING,
  },
  WBC: {
    type: DataTypes.STRING,
  },
  DiffCount: {
    type: DataTypes.STRING,
  },
  stoolExam: {
    type: DataTypes.STRING,
  },
  HIV: {
    type: DataTypes.STRING,
  },
  xRay: {
    type: DataTypes.INTEGER
  },
  ultraSound: {
    type: DataTypes.INTEGER
  }
},
{
  sequelize,
  timestamps: true,
  tableName: 'laboratory_results',
  paranoid: true,
  deletedAt: true
});
