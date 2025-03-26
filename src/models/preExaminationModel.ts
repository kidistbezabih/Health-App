import { CreationOptional, DataTypes, ForeignKey, Model } from "sequelize";
import { sequelize } from './config/sequelize';

export interface PreExaminationModelRow {
  id?: number;
  visitId: number;
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
  declare id: CreationOptional<number>;
  declare visitId: ForeignKey<number>;
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
  visitId: {
    type: DataTypes.INTEGER,
  },
  chiefComplaint: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  hpi: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  pastHx: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  currentHealthStatus: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  familyHx: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  psychologicalAndPersonalHx: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  general: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  skin: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  head: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  eyes: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  ear: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  mouth: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  breast: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  respiratory: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  gastro: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  guneto: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  meskal: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  nervous: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  examinedBy: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'pre_examinations',
  paranoid: true,
  deletedAt: true
});
