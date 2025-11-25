import express from "express";
import cors from "cors";
import morgan from "morgan";
import {Request, Response} from "express";

const app = express();
app.get('/', (req: Request, res: Response)=> {
    console.log("Página de inicio");
    res.send("Página de inicio");
});


export default app;