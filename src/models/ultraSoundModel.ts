import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface UltraSoundModelRow {
  id?: number;
  examType?: CreationOptional<string>;
  notes?: CreationOptional<string>;
  imageFilePath?: CreationOptional<string>;
  findings?: CreationOptional<string>;
  diagnosis?: CreationOptional<string>;
  technician?: CreationOptional<string>;
}

export class UltraSoundModel extends Model<UltraSoundModelRow> {
  declare id: CreationOptional<number>;
  declare examType: string;
  declare notes: string;
  declare imageFilePath: string;
  declare findings: string;
  declare diagnosis: string;
  declare technician: string;
}

UltraSoundModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  examType: {
    type: DataTypes.STRING
  },
  notes: {
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
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'ultraSounds',
  paranoid: true,
  deletedAt: true
});
