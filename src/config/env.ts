import {config} from "dotenv";

config();

export const env = {
    PORT: Number(process.env.PORT),
    HOST: process.env.HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT),
    DATABASE: process.env.DATABASE as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASS: process.env.DB_PASS as string,
}