import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import { getAllMovies } from "../controller/movieController";

const router = Router();

router.get("/movies", getAllMovies);


export default router;