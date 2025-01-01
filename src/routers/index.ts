import { Router } from "express";
import {DevRoutes} from "./devRoutes";
import PatientRoute from "./patientRoutes";
import { ExaminationRoute } from "./exainationRoutes";
import { InstitutionRoute } from "./institutionRoutes";
import { LaboratoryOrderRoute } from "./laboratoryOrdeRoute";
import { LaboratoryResultRoute } from "./laboratoryResultRoute";
import { PreExaminationRoute } from "./preExaminationRoures";
import { PrescriptioinRoute } from "./prescriptionRoutes";
import { VisitRoute } from "./visitRoute";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/dev', DevRoutes.routes);

        router.use('/patient', PatientRoute.routes);
        router.use('/examination', ExaminationRoute.routes);
        router.use('/pre-examination', PreExaminationRoute.routes);
        router.use('/institution', InstitutionRoute.routes);
        router.use('/laboratory-order', LaboratoryOrderRoute.routes);
        router.use('/laboratory-result', LaboratoryResultRoute.routes);
        router.use('/laboratory', LaboratoryOrderRoute.routes);
        router.use('/prescription', PrescriptioinRoute.routes);
        router.use('/visit', VisitRoute.routes);


        return router;
    }
}
