import Admin from '../models/Admin';
import Medic from '../models/Medic';

export const uniqueAdminDNI = async (adminDNI: string) : Promise<void> => {
    const adminDNIExists = await Admin.findOne({
        admin_dni: adminDNI
    }).exec();
    if (adminDNIExists) {
        throw new Error(`El administrador con el DNI: ${adminDNI} ya existe en la base de datos.`)
    }
}

export const uniqueMedicDNI = async (medicDNI: string) : Promise<void> => {
    const medicDNIExists = await Medic.findOne({
        medic_dni: medicDNI
    }).exec();
    if (medicDNIExists) {
        throw new Error(`El medico con el DNI: ${medicDNI} ya existe en la base de datos.`)
    }
}

export const uniqueMedicCPM = async (medicCPM: string) : Promise<void> => {
    const medicCPMExists = await Medic.findOne({
        medic_cpm: medicCPM
    }).exec();
    if (medicCPMExists) {
        throw new Error(`El medico con el CPM: ${medicCPM} ya existe en la base de datos.`)
    }
}
