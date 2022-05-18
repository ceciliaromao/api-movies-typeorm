import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class GetAllMoviesService {
  async execute() {
    const repo = getRepository(Movies);

    const movies = await repo.find({
      relations: ["category"],
    });

    return movies;
  }
}
