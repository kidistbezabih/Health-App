import { CreationOptional, DataTypes, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface InstitutionModelRow {
  id: number;
  name: string;
  address: string;
}

export class InstitutionModel extends Model<InstitutionModelRow, Omit<InstitutionModelRow, 'id'>> {
  declare id: CreationOptional<number>; // Ensure 'id' is optional and auto-incremented
  declare name: string;
  declare address: string;
}

InstitutionModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'institutions',
  paranoid: true,
  deletedAt: true // Correcting 'adress' to 'address' in the type definition
});
