import {env} from "./config/env";
import {AppDataSource} from "./config/data_source";
import app from "./app";

AppDataSource.initialize().then(
    () => {
        console.log("Conexión con la base de datos establecida");
        app.listen(env.PORT, ()=>{
            console.log("Servidor escuchando en puerto:", env.PORT);
        });
    }
).catch(
    (error) => {
        console.log("Error al conectar la base de datos: ", error.message);
    }
)