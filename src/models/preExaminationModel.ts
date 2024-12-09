import { CreationOptional, DataType, DataTypes, Model } from "sequelize";
import {sequelize} from './config/sequelize'


export interface PreExaminationModelRow{
  id: number;
  symptomes: string;
  bloodPreasure: string;
  bodyTemtrature: string;
  respiratoryRate: string;
  oxygenSaturation: string;
  weight: string;
  height: string;
}

export class PreExaminationModel extends Model<PreExaminationModelRow, Omit<PreExaminationModelRow, 'id'>>{
  declare id: CreationOptional<number>;
  declare symptomes: string;
  declare bloodPreasure: string;
  declare bodyTemtrature: string;
  declare respiratoryRate: string;
  declare oxygenSaturation: string;
  declare weight: number;
  declare height: number;
}

PreExaminationModel.init({
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  symptomes: {type: DataTypes.STRING},
  bloodPreasure: {type: DataTypes.STRING},
  bodyTemtrature: {type: DataTypes.STRING},
  respiratoryRate: {type: DataTypes.STRING},
  oxygenSaturation: {type: DataTypes.STRING},
  weight: {type: DataTypes.INTEGER},
  height: {type: DataTypes.INTEGER},
}, {
  sequelize,
  tableName: "PreExamination",
  timestamps: true,
})