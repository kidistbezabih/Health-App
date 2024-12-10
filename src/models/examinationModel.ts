import { CreationOptional, DataType, DataTypes, ForeignKey, Model } from "sequelize";
import {sequelize} from './config/sequelize'


export interface ExaminationMoldeRow{
  symptoms?: string;
  bloodPressure?: string;
  bodyTemtrature?: string;
  respirationRate?: string;
  oxygenSaturation?: string;
  weight?: string;
  height?: string;
}

export class ExaminationModel extends Model<ExaminationMoldeRow>{
  declare symptoms: CreationOptional<string>;
  declare bloodPressure: CreationOptional<string>;
  declare bodyTemtrature: CreationOptional<string>;
  declare respirationRate: CreationOptional<string>;
  declare oxygenSaturation: CreationOptional<string>;
  declare weight: CreationOptional<number>;
  declare height: CreationOptional<number>;
}

ExaminationModel.init({
  symptoms: {type: DataTypes.STRING},
  bloodPressure: {type: DataTypes.STRING},
  bodyTemtrature: {type: DataTypes.STRING},
  respirationRate: {type: DataTypes.STRING},
  oxygenSaturation: {type: DataTypes.STRING},
  weight: {type: DataTypes.INTEGER},
  height: {type: DataTypes.INTEGER},
}, {
  sequelize,
  timestamps: true,
  tableName: 'examination',
  paranoid: true,
  deletedAt: true
});