import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const appDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.PORT) || 8889,
    username: process.env.USERNAME || "root",
    password: process.env.PASSWORD || "root",
    database: process.env.DATABASE || "users_db",
    entities: ["src/entities/**/*.ts"],
    synchronize: true
})

