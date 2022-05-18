import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const service = new CreateCategoryService();
    const result = await service.execute({ name });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).json(result);
  }
}
