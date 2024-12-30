import { CreationOptional, DataTypes, ForeignKey, Model } from "sequelize";
import { sequelize } from './config/sequelize';

export interface PreExaminationModelRow {
  id: number;
  patientId: number;
  chiefComplaint?: string;
  hpi?: string;
  pastHx?: string;
  currentHealthStatus?: string;
  familyHx?: string;
  psychologicalAndPersonalHx?: string;
  general?: string;
  skin?: string;
  head?: string;
  eyes?: string;
  ear?: string;
  mouth?: string;
  breast?: string;
  respiratory?: string;
  gastro?: string;
  guneto?: string;
  meskal?: string;
  nervous?: string;
  examinedBy?: string;
}

export class PreExaminationModel extends Model<PreExaminationModelRow, Omit<PreExaminationModelRow, 'id'>> {
  declare id: number;
  declare patientId: ForeignKey<number>;
  declare chiefComplaint: CreationOptional<string>;
  declare hpi: CreationOptional<string>;
  declare pastHx: CreationOptional<string>;
  declare currentHealthStatus: CreationOptional<string>;
  declare familyHx: CreationOptional<string>;
  declare psychologicalAndPersonalHx: CreationOptional<string>;
  declare general: CreationOptional<string>;
  declare skin: CreationOptional<string>;
  declare head: CreationOptional<string>;
  declare eyes: CreationOptional<string>;
  declare ear: CreationOptional<string>;
  declare mouth: CreationOptional<string>;
  declare breast: CreationOptional<string>;
  declare respiratory: CreationOptional<string>;
  declare gastro: CreationOptional<string>;
  declare guneto: CreationOptional<string>;
  declare meskal: CreationOptional<string>;
  declare nervous: CreationOptional<string>;
  declare examinedBy: CreationOptional<string>;
}

PreExaminationModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  patientId: {
    type: DataTypes.INTEGER,
  },
  chiefComplaint: {
    type: DataTypes.STRING,
  },
  hpi: {
    type: DataTypes.STRING,
  },
  pastHx: {
    type: DataTypes.STRING,
  },
  currentHealthStatus: {
    type: DataTypes.STRING,
  },
  familyHx: {
    type: DataTypes.STRING,
  },
  psychologicalAndPersonalHx: {
    type: DataTypes.STRING,
  },
  general: {
    type: DataTypes.STRING,
  },
  skin: {
    type: DataTypes.STRING,
  },
  head: {
    type: DataTypes.STRING,
  },
  eyes: {
    type: DataTypes.STRING,
  },
  ear: {
    type: DataTypes.STRING,
  },
  mouth: {
    type: DataTypes.STRING,
  },
  breast: {
    type: DataTypes.STRING,
  },
  respiratory: {
    type: DataTypes.STRING,
  },
  gastro: {
    type: DataTypes.STRING,
  },
  guneto: {
    type: DataTypes.STRING,
  },
  meskal: {
    type: DataTypes.STRING,
  },
  nervous: {
    type: DataTypes.STRING,
  },
  examinedBy: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'pre_examinations',
  paranoid: true,
  deletedAt: true
});
