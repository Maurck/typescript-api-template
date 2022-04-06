import { Request, Response } from "express"
import bcryptjs from "bcryptjs";
import Medic from "../../../models/Medic"
import Utils from "../../../../shared/utils/Utils"
import Responses from "../../../../shared/utils/Responses"

class LoginMedicFlow {

    async flow(req : Request, res : Response){
        const { medic_cpm, medic_password } = req.body;

        try {
          const medic = await Medic.findOne({
            medic_cpm,
          }).exec();
      
          if (!medic) {
            return Responses.customErrorResponse(res, "Medico no encontrado", 400);
          }
      
          const validPassword = bcryptjs.compareSync(
            medic_password,
            medic.medic_password
          );
      
          if (!validPassword) {
            return Responses.customErrorResponse(res, "Contraseña incorrecta", 400);
          }
      
          const token = await Utils.generateJWT(medic._id, medic.user_type);
          return res.json({
            ok: true,
            token,
            user_id: medic._id,
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

const createMedic = new LoginMedicFlow();

export default createMedic.flow;