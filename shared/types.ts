import { z } from "zod";

export const GenreSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export const MovieSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  dateReleased: z.string().min(1, "Date released is required"),
  runtime: z.string().min(1, "Runtime is required"),
  plot: z.string().min(1, "Plot is required"),
  language: z.string().min(1, "Language is required"),
  poster: z.string().url("Poster must be a valid URL"),
  isWatched: z.boolean().optional(),
  genres: z.array(GenreSchema),
});

export type Genre = z.infer<typeof GenreSchema>;
export type Movie = z.infer<typeof MovieSchema>;
