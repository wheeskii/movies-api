import { useState, useEffect } from "react";
import type { Movie } from "../../../shared/types";
import { getMovies } from "../api/movies";
// import { Link } from "react-router-dom";
import '../styles/MovieList.css';

export const Movies = () => {
    
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies()
        .then(setMovies)
        .catch(console.error);
    }, []); 

    return (
        <>
    
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={ movie.id } className="movie-card">
                    <img src={ movie.poster || "https://www.mockofun.com/wp-content/uploads/2020/02/minimalist-movie-poster.jpg" } alt={movie.title} />
                    <h4>{ movie.title }</h4>
                    {/* <p>{ movie.plot }</p> */}
                    {/* <p>{movie.genres.map(g => g.name)
                    .join(", ")}</p> */}
                    {/* {movie.genres.map((g) => (
                        <Link key={g.id || g.name} to={`/genres/${encodeURIComponent(g.name)}`}>
                            <button className="genres">
                                {g.name}
                            </button>
                        </Link>
                    ))} */}
                </div>
            ))}
        </div>
        </>
    )
}