import type { Request, Response } from "express";
import { Genre } from "../entities/Genre";
import { Movie } from "../entities/Movie";
import { appDataSource } from "../data/data-source";


const movieRepo = appDataSource.getRepository(Movie);
const genreRepo = appDataSource.getRepository(Genre);

export const getMoviesByGenre = async (req:Request, res: Response) => {
    try {
        const { name } = req.params;

        const genre = await genreRepo.findOne({
            where: { name: String(req.params.name) },
            relations: ["movies"],
        });

        if (!genre) {
            return res.status(404).json({ message: "Genre not found"});
        }

        res.json({ movies: genre.movies});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error!" })
    }
      
}