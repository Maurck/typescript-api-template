import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class Utils {
    static encryptPassword(password : string) {
        const salt = bcryptjs.genSaltSync();
        return bcryptjs.hashSync(password, salt);
    }
    
    static generateJWT(id : string, type : number) {
        return new Promise((resolve, reject) => {
            const payload = { id , type };
            jwt.sign(payload, process.env.SECRET_KEY as string, {
                expiresIn: process.env.EXPIRATION_DATE
            }, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }
}

export default Utils;