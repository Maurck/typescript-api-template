import { body } from "express-validator";
import { fieldValidation } from "../../../../shared/middlewares/fieldValidation";

class LoginMedicValidation {

    createMedicValidators = [
        body('medic_cpm').not().isEmpty(),
        body('medic_cpm', 'El CPM debe contener 6 caracteres').isLength({ min: 6, max: 6 }),
        body('medic_password').not().isEmpty(),
        fieldValidation
    ]

}

const createMedic = new LoginMedicValidation();

export default createMedic.createMedicValidators;