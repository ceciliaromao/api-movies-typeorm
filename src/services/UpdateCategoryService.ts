import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
};

export class UpdateCategoryService {
  async execute({ id, name }: CategoryUpdateRequest) {
    const repo = getRepository(Category);
    const category = await repo.findOne(id);
    if (!category) {
      return new Error(`Category not found`);
    }

    category.name = name ? name : category.name;
    await repo.save(category);

    return category;
  }
}
