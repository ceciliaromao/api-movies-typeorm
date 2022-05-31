import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";
import { SenhaHash } from "../senhaHash";

type UserRequest = {
  email: string;
  password: string;
};

export class AuthService {
  async execute({ email, password }: UserRequest) {
    const entity = getRepository(User);

    const user = await entity.findOne({ email });
    if (!user) {
      return new Error(`Incorrect Email or Password`);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return new Error(`Incorrect Email or Password`);
    }

    const token = jwt.sign({ id: user.id }, SenhaHash, { expiresIn: "1d" });

    delete user.password;
    return { user, token };
  }
}
