import {env} from "./env";
import {DataSource} from "typeorm";
import "reflect-metadata";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: env.HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DATABASE,
    logging: true,
    entities: [__dirname + "/../entities/**/*.{ts, js}"],
    synchronize: false,
})