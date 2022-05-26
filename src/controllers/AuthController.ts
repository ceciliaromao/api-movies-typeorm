import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const service = new AuthService();
    const result = await service.execute({ email, password });

    if (result instanceof Error) {
      return res.status(401).json(result.message);
    }

    return res.status(201).json(result);
  }
}
