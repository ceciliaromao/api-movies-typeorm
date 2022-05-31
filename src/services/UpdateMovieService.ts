import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

type MovieUpdateRequest = {
  id: string;
  name: string;
  year: number;
  director: string;
  category_id: string;
};

export class UpdateMovieService {
  async execute({ id, name, year, director, category_id }: MovieUpdateRequest) {
    const entity = getRepository(Movies);
    const movie = await entity.findOne(id);
    if (!movie) {
      return new Error(`Movie not found`);
    }

    movie.name = name ?? movie.name;
    movie.year = year ?? movie.year;
    movie.director = director ?? movie.director;
    movie.category_id = category_id ?? movie.category_id;
    await entity.save(movie);

    return movie;
  }
}
