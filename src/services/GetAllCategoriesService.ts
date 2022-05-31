import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
  async execute() {
    const entity = getRepository(Category);
    const categories = await entity.find();

    return categories;
  }
}
