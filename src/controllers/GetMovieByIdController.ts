import { Request, Response } from "express";
import { GetMovieByIdService } from "./../services/GetMovieByIdService";

export class GetMovieByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const service = new GetMovieByIdService();
    const movie = await service.execute(id);

    return res.status(200).json(movie);
  }
}
