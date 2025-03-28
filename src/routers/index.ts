import { Router } from "express";
import {DevRoutes} from "./devRoutes";
import PatientRoute from "./patientRoutes";
import { ExaminationRoute } from "./examinationRoutes";
import { InstitutionRoute } from "./institutionRoutes";
import { LaboratoryOrderRoute } from "./laboratoryOrdeRoute";
import { LaboratoryResultRoute } from "./laboratoryResultRoute";
import { PreExaminationRoute } from "./preExaminationRoures";
import { PrescriptioinRoute } from "./prescriptionRoutes";
import { VisitRoute } from "./visitRoute";
import { XrayRoute } from "./xrayRoutes";
import { UltraSoundRoute } from "./ultraSoundRoutes";
import { ReferralRoute } from "./referralRoute";
import { MedicalCertificatRoute } from "./medicalCertificateRoutes";
import { UserRoutes } from "./userRoute";
import { RoleRoutes } from "./roleRoute";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/dev', DevRoutes.routes);

        router.use('/institution', InstitutionRoute.routes);
        router.use('/patient', PatientRoute.routes);
        router.use('/visit', VisitRoute.routes);
        router.use('/pre-examination', PreExaminationRoute.routes);
        router.use('/examination', ExaminationRoute.routes);
        router.use('/laboratory-order', LaboratoryOrderRoute.routes);
        router.use('/laboratory-result', LaboratoryResultRoute.routes);
        router.use('/xray', XrayRoute.routes);
        router.use('/ultrasound', UltraSoundRoute.routes);
        router.use('/prescription', PrescriptioinRoute.routes);
        router.use('/referral', ReferralRoute.routes);
        router.use('/medical-certificate', MedicalCertificatRoute.routes);
        router.use('/user', UserRoutes.routes);
        router.use('/role', RoleRoutes.routes);

        return router;
    }
}
