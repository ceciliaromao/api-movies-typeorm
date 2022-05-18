import { Request, Response } from "express";
import { CreateMovieService } from "../services/CreateMovieService";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { name, year, director, category_id } = req.body;
    const service = new CreateMovieService();
    const result = await service.execute({ name, year, director, category_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).json(result);
  }
}
