import type { Request, Response } from "express";
import { Genre } from "../entities/Genre";
import { appDataSource } from "../data/data-source";
import { Movie } from "../entities/Movie";
import { movieSchema } from "../validator/movie.validator";


const movieRepo = appDataSource.getRepository(Movie);
const genreRepo = appDataSource.getRepository(Genre);


export const getAllMovies = async (req: Request, res: Response) => {
    const movies = await movieRepo.find({
        relations: ["genres"],
        order: { id: "ASC"}
    });

    res.status(200).json({ movies });
}

export const addMovie = async (req: Request, res:Response) => {
    
    let genreEntities: Genre[] = [];
    
    try {
        const parsed = movieSchema.parse(req.body);
        // const { title, dateReleased, runtime, plot, language, poster, genres } = req.body;
        
        const genres = await Promise.all(
            parsed.genres.map(async (name) => {
              let genre = await genreRepo.findOne({ where: { name } });
              if (!genre) {
                genre = genreRepo.create({ name });
                await genreRepo.save(genre);
              }
              return genre;
            })
        );

        const newMovie = movieRepo.create({
            title: parsed.title,
            dateReleased: parsed.dateReleased,
            runtime: parsed.runtime,
            plot: parsed.plot,
            language: parsed.language,
            poster: parsed.poster,
            isWatched: parsed.isWatched || false,
            genres,
          });

        await movieRepo.save(newMovie);

        res.status(201).json({newMovie});
    } catch (error) {
        if (error instanceof Error && "issues" in error) {    
            const zodError = error as any;
            return res.status(400).json({ errors: zodError.issues });
        }
        console.error("Error creating movie:", error);
        res.status(500).json({ message: "Failed to create movie" });
    }
}