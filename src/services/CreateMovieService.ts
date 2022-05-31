import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";
import { Category } from "./../entities/Category";

type MovieRequest = {
  name: string;
  year: number;
  director: string;
  category_id: string;
};

export class CreateMovieService {
  async execute({
    name,
    year,
    director,
    category_id,
  }: MovieRequest): Promise<Movies | Error> {
    const entity = getRepository(Movies);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error(`Category ${category_id} not found`);
    }

    const Movie = entity.create({ name, year, director, category_id });
    await entity.save(Movie);
    return Movie;
  }
}
