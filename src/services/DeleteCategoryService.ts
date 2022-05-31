import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const entity = getRepository(Category);
    if (!(await entity.findOne(id))) {
      return new Error(`Cannot delete ${id}`);
    }

    await entity.delete(id);
  }
}
