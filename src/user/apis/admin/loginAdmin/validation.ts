import { body } from "express-validator";
import { fieldValidation } from "../../../../shared/middlewares/fieldValidation";

class LoginAdminValidation {

    createAdminValidators = [
        body('admin_dni').not().isEmpty(),
        body('admin_dni', 'El DNI debe contener 8 caracteres').isLength({ min: 8, max: 8 }),
        body('admin_password').not().isEmpty(),
        fieldValidation
    ]

}

const createAdmin = new LoginAdminValidation();

export default createAdmin.createAdminValidators;