import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
    admin_dni: {
        type: String,
        required: [true, 'El DNI es requerido'],
        unique: true
    },
    admin_password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    user_type: {
        type: Number,
        required: [true, 'El tipo de usuario es requerido']
    }
});

AdminSchema.methods.toJSON = function () {
    const { __v, admin_password, user_type, ...admin } = this.toObject();
    return admin;
}

export default model("Admin", AdminSchema);
