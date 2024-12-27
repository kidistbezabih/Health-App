import { Sequelize } from "sequelize";
import {development} from './models';


export const sequelize = new Sequelize(development);

