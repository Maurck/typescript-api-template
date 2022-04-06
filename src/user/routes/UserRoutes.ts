import { Router } from 'express';

import CreateAdminFlow from "../apis/admin/createAdmin/flow"
import CreateAdminValidator from "../apis/admin/createAdmin/validation"

import LoginAdminFlow from "../apis/admin/loginAdmin/flow"
import LoginAdminValidator from "../apis/admin/loginAdmin/validation"

import CreateMedicFlow from "../apis/medic/createMedic/flow"
import CreateMedicValidator from "../apis/medic/createMedic/validation"

import LoginMedicFlow from "../apis/medic/loginMedic/flow"
import LoginMedicValidator from "../apis/medic/loginMedic/validation"


class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/admin', CreateAdminValidator, CreateAdminFlow);
        this.router.post('/admin/login', LoginAdminValidator, LoginAdminFlow);

        this.router.post('/medic', CreateMedicValidator, CreateMedicFlow);
        this.router.post('/medic/login', LoginMedicValidator, LoginMedicFlow);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;