import { Schema, model } from "mongoose";

const MedicSchema = new Schema({
    medic_dni: {
        type: String,
        required: [true, 'El DNI es requerido'],
        unique: true
    },
    medic_cpm: {
        type: String,
        required: [true, 'El CPM es requerido'],
        unique: true
    },
    medic_password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    user_type: {
        type: Number,
        required: [true, 'El tipo de usuario es requerido']
    }
});

MedicSchema.methods.toJSON = function () {
    const { __v, medic_password, medic_cpm, user_type, ...medic } = this.toObject();
    return medic;
}

export default model("Medic", MedicSchema);
