import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class GetAllMoviesService {
  async execute() {
    const entity = getRepository(Movies);

    const movies = await entity.find({
      relations: ["category"],
    });

    return movies;
  }
}
