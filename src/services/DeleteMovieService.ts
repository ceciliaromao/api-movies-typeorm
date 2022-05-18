import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

export class DeleteMovieService {
  async execute(id: string) {
    const repo = getRepository(Movies);
    if (!(await repo.findOne(id))) {
      return new Error(`Cannot delete ${id}`);
    }

    await repo.delete(id);
  }
}
