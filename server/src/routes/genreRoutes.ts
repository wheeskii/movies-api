import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import { getMoviesByGenre } from "../controller/genreController";


const genreRouter = Router();

genreRouter.get("/movies/genre/:name", getMoviesByGenre);


export default genreRouter;