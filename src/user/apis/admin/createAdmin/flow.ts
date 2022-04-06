import { Request, Response } from "express"
import Admin from "../../../models/Admin"
import Utils from "../../../../shared/utils/Utils"
import Responses from "../../../../shared/utils/Responses"

class CreateAdminFlow {

    async flow(req : Request, res : Response){
        const {
            admin_dni,
            admin_password
        } = req.body;
    
        const admin = new Admin({
            admin_dni,
            user_type: 0
        });
    
        try {
    
            admin.admin_password = Utils.encryptPassword(admin_password);
            const token = await Utils.generateJWT(admin._id, admin.user_type);
    
            await admin.save();
    
            return res.status(201).json({
                ok: true,
                message: "Usuario administrador creado con exito",
                token,
                user_id: admin._id
            });
    
        } catch (error) {
            console.log(error)
            return Responses.errorResponse(res, "Error: Contacte al administrador de base de datos", error as Error, 500);
            
        }
    }

}

const createAdmin = new CreateAdminFlow();

export default createAdmin.flow;