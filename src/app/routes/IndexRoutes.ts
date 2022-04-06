import { Request, Response, Router } from 'express';
import userRouter from "../../user/routes/UserRoutes"

class IndexRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', (req: Request, res: Response)=> {
            res.send('Hola Mundo!');
        })

        this.router.use('/user', userRouter);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;