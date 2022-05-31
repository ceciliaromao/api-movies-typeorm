import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
};

export class CreateCategoryService {
  async execute({ name }: CategoryRequest): Promise<Category | Error> {
    const entity = getRepository(Category);
    if (await entity.findOne({ name })) {
      return new Error(`Category ${name} already exists`);
    }
    const category = entity.create({ name });
    await entity.save(category);
    return category;
  }
}
