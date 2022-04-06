import { Request, Response } from "express"
import bcryptjs from "bcryptjs";
import Admin from "../../../models/Admin"
import Utils from "../../../../shared/utils/Utils"
import Responses from "../../../../shared/utils/Responses"

class LoginAdminFlow {

    async flow(req : Request, res : Response){
        const { admin_dni, admin_password } = req.body;

        try {
          const admin = await Admin.findOne({
            admin_dni,
          }).exec();
      
          if (!admin) {
            return Responses.customErrorResponse(res, "Administrador no encontrado", 400);
          }
      
          const validPassword = bcryptjs.compareSync(
            admin_password,
            admin.admin_password
          );
      
          if (!validPassword) {
            return Responses.customErrorResponse(res, "Contraseña incorrecta", 400);
          }
      
          const token = await Utils.generateJWT(admin._id, admin.user_type);
          return res.json({
            ok: true,
            token,
            user_id: admin._id,
          });
        } catch (error) {
          console.log(error);
          Responses.errorResponse(
            res,
            "Error: Contacte al administrador de base de datos",
            error as Error,
            500
          );
        }
    }

}

const createAdmin = new LoginAdminFlow();

export default createAdmin.flow;