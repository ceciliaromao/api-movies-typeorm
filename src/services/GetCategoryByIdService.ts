import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetCategoryByIdService {
  async execute(id: string) {
    const repo = getRepository(Category);
    const category = await repo.findOne(id);
    if (!category) {
      return new Error(`Category not found`);
    }

    return category;
  }
}
