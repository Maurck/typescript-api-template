import { body } from "express-validator";
import { uniqueAdminDNI } from "../../../middlewares/databaseValidators"
import { fieldValidation } from "../../../../shared/middlewares/fieldValidation";

class CreateAdminValidation {

    createAdminValidators = [
        body('admin_dni').not().isEmpty(),
        body('admin_dni').isNumeric().trim(),
        body('admin_dni', 'El DNI debe contener 8 caracteres').isLength({ min: 8, max: 8 }),
        body('admin_dni').custom(uniqueAdminDNI),
        body('admin_password').not().isEmpty(),
        fieldValidation
    ]

}

const createAdmin = new CreateAdminValidation();

export default createAdmin.createAdminValidators;