import express from "express";
import cors from "cors";
import morgan from "morgan";
import {Request, Response} from "express";
import {errorHandler} from "./middlewares/errorHandler";
import paisesRoutes from "./modules/paises/routes/paisesRoutes";
import departamentosRoutes from "./modules/departamentos/routes/departamentosRoutes";
import municipiosRoutes from "./modules/municipios/routes/municipiosRoutes";
import empresasRoutes from "./modules/empresas/routes/empresasRoutes";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req: Request, res: Response)=> {
    console.log("Página de inicio");
    res.send("Página de inicio");
});
app.use('/paises', paisesRoutes);
app.use('/departamentos', departamentosRoutes);
app.use('/municipios', municipiosRoutes);
app.use('/empresas', empresasRoutes);
app.use(errorHandler);

export default app;