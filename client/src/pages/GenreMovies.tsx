import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../../shared/types";
import { getMovies } from "../api/movies"; // adjust path if needed

export const GenreMovies = () => {
  const { genreName } = useParams<{ genreName: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  console.log("genreName:", genreName);

  useEffect(() => {
    if (!genreName) return; // <-- prevents "undefined" issue

    getMovies()
      .then((allMovies) => {
        console.log("All movies:", allMovies);
        const filtered = allMovies.filter((movie) =>
          movie.genres.some((g) => g.name === genreName)
        );
        console.log("Filtered movies:", filtered);
        setMovies(filtered);
      })
      .catch(console.error);
  }, [genreName]);

  return (
    <div>
      <h1>Movies in {genreName}</h1>
      <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found for this genre.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster || "/fallback.jpg"}
              alt={movie.title}
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).src = "/fallback.jpg")
              }
            />
            <h2>{movie.title}</h2>
            <p>{movie.genres.map((g) => g.name).join(", ")}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
};
