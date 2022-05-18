import { Request, Response } from "express";
import { DeleteMovieService } from "../services/DeleteMovieService";

export class DeleteMovieController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const service = new DeleteMovieService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
