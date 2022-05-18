import { Request, Response } from "express";
import { GetAllMoviesService } from "../services/GetAllMoviesService";

export class GetAllMoviesController {
  async handle(req: Request, res: Response) {
    const service = new GetAllMoviesService();
    const Movies = await service.execute();

    return res.status(200).json(Movies);
  }
}
