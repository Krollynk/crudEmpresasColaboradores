import express from "express";
import cors from "cors";
import morgan from "morgan";
import {Request, Response} from "express";
import paisesRoutes from "./modules/paises/routes/paisesRoutes";
import {errorHandler} from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req: Request, res: Response)=> {
    console.log("Página de inicio");
    res.send("Página de inicio");
});
app.use('/paises', paisesRoutes);
app.use(errorHandler);

export default app;