import { Request, Response } from "express"
import Medic from "../../../models/Medic"
import Utils from "../../../../shared/utils/Utils"
import Responses from "../../../../shared/utils/Responses"

class CreateMedicFlow {

    async flow(req : Request, res : Response){
        const {
            medic_dni,
            medic_cpm,
            medic_password
        } = req.body;
    
        const medic = new Medic({
            medic_dni,
            medic_cpm,
            user_type: 1
        });
    
        try {
    
            medic.medic_password = Utils.encryptPassword(medic_password);
            const token = await Utils.generateJWT(medic._id, medic.user_type);
    
            await medic.save();
    
            return res.status(201).json({
                ok: true,
                message: "Usuario medico creado con exito",
                token,
                user_id: medic._id
            });
    
        } catch (error) {
            console.log(error)
            return Responses.errorResponse(res, "Error: Contacte al administrador de base de datos", error as Error, 500);
            
        }
    }

}

const createMedic = new CreateMedicFlow();

export default createMedic.flow;