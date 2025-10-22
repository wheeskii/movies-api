// src/api/movies.ts
import api from "./axios";
import type { Movie } from "../../../shared/types";

export const getMovies = async (): Promise<Movie[]> => {
  const { data } = await api.get("/movies");
  return data.movies;
};

export const addMovie = async (movie: Movie) => {
  const { data } = await api.post("/movies", movie);
  return data;
};

export const deleteMovie = async (id: number) => {
  await api.delete(`/movies/${id}`);
};
