import express from "express";
import cors from "cors";
import morgan from "morgan";
import {Request, Response} from "express";

const app = express();

app.use(express.json());
app.use(cors);
app.use(morgan);
app.get('/', (req: Request, res: Response)=> {
    console.log("Página de inicio");
    res.send("Página de inicio");
});


export default app;