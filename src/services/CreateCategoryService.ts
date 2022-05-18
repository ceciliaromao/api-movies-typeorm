import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
};

export class CreateCategoryService {
  async execute({ name }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);
    if (await repo.findOne({ name })) {
      return new Error(`Category ${name} already exists`);
    }
    const category = repo.create({ name });
    await repo.save(category);
    return category;
  }
}
