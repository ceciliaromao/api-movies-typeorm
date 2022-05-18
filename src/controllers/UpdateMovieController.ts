import { Request, Response } from "express";
import { UpdateMovieService } from "../services/UpdateMovieService";

export class UpdateMovieController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, year, director, category_id } = req.body;
    const service = new UpdateMovieService();
    const result = await service.execute({
      id,
      name,
      year,
      director,
      category_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
