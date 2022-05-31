import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class DeleteMovieService {
  async execute(id: string) {
    const entity = getRepository(Movies);
    if (!(await entity.findOne(id))) {
      return new Error(`Cannot delete ${id}`);
    }

    await entity.delete(id);
  }
}
