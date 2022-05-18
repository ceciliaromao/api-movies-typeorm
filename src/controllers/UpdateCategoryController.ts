import { UpdateCategoryService } from "./../services/UpdateCategoryService";
import { Request, Response } from "express";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const service = new UpdateCategoryService();
    const result = await service.execute({ id, name });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
