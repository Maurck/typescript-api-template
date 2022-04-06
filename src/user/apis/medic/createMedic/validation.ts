import { body } from "express-validator";
import { uniqueMedicDNI } from "../../../middlewares/databaseValidators"
import { uniqueMedicCPM } from "../../../middlewares/databaseValidators"
import { fieldValidation } from "../../../../shared/middlewares/fieldValidation";

class CreateMedicValidation {

    createMedicValidators = [
        body('medic_dni').not().isEmpty(),
        body('medic_dni').isNumeric().trim(),
        body('medic_dni', 'El DNI debe contener 8 caracteres').isLength({ min: 8, max: 8 }),
        body('medic_dni').custom(uniqueMedicDNI),

        body('medic_cpm').not().isEmpty(),
        body('medic_cpm').isNumeric().trim(),
        body('medic_cpm', 'El CPM debe contener 6 caracteres').isLength({ min: 6, max: 6 }),
        body('medic_cpm').custom(uniqueMedicCPM),

        body('medic_password').not().isEmpty(),
        fieldValidation
    ]

}

const createMedic = new CreateMedicValidation();

export default createMedic.createMedicValidators;