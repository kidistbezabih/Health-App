import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface VisitModelRow {
  id: number;
  patientId: string;
}

export class VisitModel extends Model<VisitModelRow, Omit<VisitModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare patientId: ForeignKey<number>;
  // association mixin
}

VisitModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientId: {
    type: DataTypes.STRING, // Corrected type to STRING
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'visits',
  paranoid: true,
  deletedAt: true,
});
