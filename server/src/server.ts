import "reflect-metadata";
import type { Response, Request } from "express";
import { appDataSource } from "./data-source"; 
import express from 'express';
import router from "./routes/movieRoutes";

const app = express();
const PORT = 8000;

app.use(express.json())
app.use('/api', router)

app.use('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World"})
})


appDataSource.initialize()
  .then(() => {
    console.log("Database connection successful!");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
