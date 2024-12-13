import { CreationOptional, DataTypes, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface PatientModelRow {
  id?: number;
  institutionId: number;
  cardNumber: string;
  name: string;
  age: number;
  sex: string;
  address: string;
  zone: string;
  kebele: string;
  phoneNumber: string;
}

export class PatientModel extends Model<PatientModelRow, Omit<PatientModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare institutionId: number;
  declare cardNumber: string;
  declare name: string;
  declare age: number;
  declare sex: string;
  declare address: string;
  declare zone: string;
  declare kebele: string;
  declare phoneNumber: string;

  // Association mixin
}

PatientModel.init({
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true
  },institutionId: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true
  },
  cardNumber: {
    type: DataTypes.STRING,
    // auto generate
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  kebele: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, 
{
  sequelize,
  timestamps: true,
  tableName: 'patients',
  paranoid: true,
  deletedAt: true
});
