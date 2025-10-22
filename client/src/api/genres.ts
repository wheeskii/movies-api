import api from "./axios";
import type { Genre } from "../../../shared/types";

export const getMoviesByGenre= async (genreName: string): Promise<Genre[]> => {
  const { data } = await api.get(`/movies/genre/${genreName}`);
  return data.movies;
};