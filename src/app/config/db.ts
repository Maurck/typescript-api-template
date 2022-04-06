import mongoose from "mongoose";

// Server Class
class DbConfig {

    MONGODB_URI : string = "mongodb://localhost/restapits";
    constructor() {
        this.MONGODB_URI = process.env.MONGODB_URI as string;
    }

    public async dbConnection(): Promise<void> {
        try {
            await mongoose.connect(this.MONGODB_URI);
            console.log('Base de datos lista!');
        } catch (error) {
            console.log(error);
            throw new Error('Conexión a la base de datos fallida :(');
        }
    }
}

export { DbConfig } ;