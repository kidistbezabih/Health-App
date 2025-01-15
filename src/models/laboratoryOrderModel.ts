import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface LaboratoryOrderModelRow {
  id?: number,
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
  totalProtien?: boolean;
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
  weilFelix?: boolean;
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
  DiffCount?: boolean;
  stoolExam?: boolean;
  HIV?: boolean;
  xRay: boolean;
  ultraSound: boolean;
}

export class LaboratoryOrderModel extends Model<LaboratoryOrderModelRow> {
  declare id: number;
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
  declare totalProtien: CreationOptional<boolean>;
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
  declare weilFelix: CreationOptional<boolean>;
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
  declare DiffCount: CreationOptional<boolean>;
  declare stoolExam: CreationOptional<boolean>;
  declare HIV: CreationOptional<boolean>;
  declare xRay: CreationOptional<boolean>;
  declare ultraSound: CreationOptional<boolean>;
}

LaboratoryOrderModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  visitId: 
  {type:
     DataTypes.INTEGER
  },
  wbc: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Hgn: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ESR: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  BF: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  bloodGroup_RHType: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  bloodMorphology: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  neutrophil: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  eosinophil: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  lymphocyte: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  monocyte: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Basophil: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  FBS_RBS: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  sgot: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  sgpt: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  totalProtien: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  albumin: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  glucose: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ketone: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  blood: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  leukocyte: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  bilirubin: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  urobilin: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PH: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  microscopic: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  widal: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  weilFelix: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  VDHL_EPR: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Rf: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  HBsAg: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Aso: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PICT: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  HCV: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  wetMount: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  gramStain: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  AFBStain: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  pregnancyTest: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  KOH: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SKINSmear: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  protein: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  WBC: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  DiffCount: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  stoolExam: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  HIV: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  xRay: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ultraSound: 
  { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'laboratory_orders',
  paranoid: true,
  deletedAt: true,
});
