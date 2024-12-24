import { sequelize } from "./config/sequelize";
import { Sequelize } from "sequelize";

import { ConsoleLogger } from "../core/utils";
import { PatientModel } from "./patientModel"; 
import { InstitutionModel } from "./institutionModel";
import { VisitModel } from "./visitModel";
import { PrescriptionModel } from "./prescriptionModel";
import { PreExaminationModel } from "./preExaminationModel";
import { ExaminationModel } from "./examinationModel";
import { LaboratoryOrderModel } from "./laboratoryOrderModel";
import { LaboratoryResultModel } from "./laboratoryResultModel";
import { XrayModel } from "./xrayModel";
import { UltrasoundModel } from "./ultrasoundModel";

export class DB {
  static _instance: DB;

  constructor(private db: any = {}) {
    this.db.sequelize = sequelize;
    this.db.Sequelize = Sequelize;

    // include database models
    this.db.patient = PatientModel;
    this.db.institutions = InstitutionModel;
    this.db.visit = VisitModel;
    this.db.examination = ExaminationModel;
    this.db.preExamination = PreExaminationModel;
    this.db.laboratoryOrder = LaboratoryOrderModel;
    this.db.laboratoryResult = LaboratoryResultModel;
    this.db.xray = XrayModel;
    this.db.ultrasound = UltrasoundModel;

    // relation between institutions and patients
    InstitutionModel.hasMany(PatientModel, {
      foreignKey: 'institutionId'
    });
    PatientModel.belongsTo(InstitutionModel);

    // relation between patient and visit
    PatientModel.hasMany(VisitModel, {
      foreignKey: 'patientId'
    });
    VisitModel.belongsTo(PatientModel);

    // Relation between visit and pre examination
    VisitModel.hasOne(PreExaminationModel, {
      foreignKey: 'visitId'
    });
    PreExaminationModel.belongsTo(VisitModel);

    // Relation between visit and Examination 
    VisitModel.hasMany(ExaminationModel, {
      foreignKey: 'visitId'
    });
    ExaminationModel.belongsTo(VisitModel);

    // Relation between  Laboratory order and laboratory
    LaboratoryOrderModel.hasOne(LaboratoryResultModel, {
      foreignKey: 'laboratoryOrderId'
    });
    LaboratoryResultModel.belongsTo(LaboratoryOrderModel);

    // Relation between visit and LaboratoryResult
    VisitModel.hasMany(LaboratoryResultModel, {
      foreignKey: 'visitId'
    });
    LaboratoryResultModel.belongsTo(VisitModel);

    // Relation between visit and Prescription
    VisitModel.hasMany(PrescriptionModel, {
      foreignKey: 'prescriptionModelId' // corrected foreign key name
    });
    PrescriptionModel.belongsTo(VisitModel);

    // relation between xray and laboratory order
    LaboratoryOrderModel.hasMany(XrayModel, {
      foreignKey: 'xrayModelId' // corrected foreign key name
    });
    XrayModel.belongsTo(LaboratoryOrderModel);

    // relation between xray and laboratory result
    LaboratoryResultModel.hasMany(XrayModel, {
      foreignKey: 'xrayModelId' // corrected foreign key name
    });
    XrayModel.belongsTo(LaboratoryResultModel, {
      foreignKey: 'laboratoryOrderId' // corrected foreign key name
    });

    // relation between ultrasound and laboratory order
    LaboratoryOrderModel.hasMany(UltrasoundModel, {
      foreignKey: 'ultrasoundModelId' // corrected foreign key name
    });
    UltrasoundModel.belongsTo(LaboratoryOrderModel);

    // relation between ultrasound and laboratory result
    LaboratoryResultModel.hasMany(UltrasoundModel, {
      foreignKey: 'ultrasoundModelId' // corrected foreign key name
    });
    UltrasoundModel.belongsTo(LaboratoryResultModel);
    
    // relation beetween patient and examination
    // PatientModel.hasMany(ExaminationModel, {
    //   foreignKey: 'patientId' // corrected foreign key name
    // });
    // ExaminationModel.belongsTo(PatientModel);
  }



  public static get instance(): DB {
    if (!DB._instance) {
      DB._instance = new DB();
    }

    return DB._instance;
  }

  public async migrate(): Promise<string> {
    let message = '';
    try {
      await DB.instance.db.sequelize.sync();
      message = 'Database Migrated Successfully';
      ConsoleLogger.log(message);
    } catch (reason) {
      message = `\nCould Not Migrate Database Successfully',
=================================================================================\n
${reason} \n
=================================================================================`;

      ConsoleLogger.error(message);
    }
    return message;
  }

  public async migrateForce(): Promise<string> {
    let message = '';
    try {
      // ConsoleLogger.info('Disabling FOREIGN_KEY_CHECKS flag ');
      // await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      ConsoleLogger.info('Dropping all tables ');
      await DB.instance.db.sequelize.drop();
      // ConsoleLogger.info('Enabling FOREIGN_KEY_CHECKS flag');
      // await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

      await DB.instance.db.sequelize.sync({ force: true });

      message = 'Database Force Migrated Successfully';
      ConsoleLogger.log(message);
    } catch (reason) {
      message = `\nCould Not Force Migrate Database Successfully',
=================================================================================\n
${reason} \n
=================================================================================`;
      ConsoleLogger.error(message);
    }

    return message;
  }
}
