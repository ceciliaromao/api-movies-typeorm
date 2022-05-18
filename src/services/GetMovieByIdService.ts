import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class GetMovieByIdService {
  async execute(id: string) {
    const repo = getRepository(Movies);
    const movie = await repo.findOne(id);
    if (!movie) {
      return new Error(`Movie ${id} not found`);
    }

    return movie;
  }
}
