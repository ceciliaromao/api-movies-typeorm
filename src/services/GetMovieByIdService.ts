import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class GetMovieByIdService {
  async execute(id: string) {
    const entity = getRepository(Movies);
    const movie = await entity.findOne(id);
    if (!movie) {
      return new Error(`Movie ${id} not found`);
    }

    return movie;
  }
}
