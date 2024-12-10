import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface XrayModelRow{
  id: number;
  bodyPart?: string;
  exposureSettings?: string;
  imageFilePath?: string;
  findings?: string;
  diagnosis?: string;
  technician?: string;
}

export class XrayModel extends Model<XrayModelRow> {
  declare id: number;
  declare bodyPart: CreationOptional<string>;
  declare exposureSettings: CreationOptional<string>;
  declare imageFilePath: CreationOptional<string>;
  declare findings: CreationOptional<string>;
  declare diagnosis: CreationOptional<string>;
  declare technician: CreationOptional<string>;
}

  XrayModel.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement:true
  },
  bodyPart: {
    type: DataTypes.STRING
  },
  exposureSettings: {
    type: DataTypes.STRING
  },
  imageFilePath: {
    type: DataTypes.STRING
  },
  findings: {
    type: DataTypes.STRING
  },
  diagnosis: {
    type: DataTypes.STRING
  },
  technician: {
    type: DataTypes.STRING
  },
},{
  sequelize,
  timestamps: true,
  tableName: 'xrays',
  paranoid: true,
  deletedAt: true
});
