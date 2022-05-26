import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

import "../database";
import jwt from "jsonwebtoken";
import { SenhaHash } from "../senhaHash";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json(`Unauthorized`);
  }

  try {
    const token = authorization.replace("Bearer", "").trim();
    const data = jwt.verify(token, SenhaHash);
    const { id } = data as TokenPayload;
    req.userId = id;

    const repo = getRepository(User);
    const findToken = await repo.findOne({ id });
    if (!findToken) {
      return new Error(`User not found`);
    }

    const { password, ...user } = findToken;
    req.user = user;

    return next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
}
