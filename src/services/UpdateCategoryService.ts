import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
};

export class UpdateCategoryService {
  async execute({ id, name }: CategoryUpdateRequest) {
    const entity = getRepository(Category);
    const category = await entity.findOne(id);
    if (!category) {
      return new Error(`Category not found`);
    }

    category.name = name ? name : category.name;
    await entity.save(category);

    return category;
  }
}
