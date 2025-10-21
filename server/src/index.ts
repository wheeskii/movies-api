import express from 'express';
import { DataSource} from 'typeorm';

// const app = express();

const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8000,
    username: "root",
    password: "root",
    database: "user_db",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],

})

try {
    appDataSource.initialize();
    console.log("Database has been initialized!")
} catch (error) {
    console.error("Error during database initialization! ", error)
}

