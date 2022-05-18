import { GetCategoryByIdService } from "./../services/GetCategoryByIdService";
import { Request, Response } from "express";

export class GetCategoryByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const service = new GetCategoryByIdService();
    const category = await service.execute(id);

    return res.status(200).json(category);
  }
}
