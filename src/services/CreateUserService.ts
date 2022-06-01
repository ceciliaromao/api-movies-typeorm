import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserService {
  async execute({ name, email, password }: UserRequest): Promise<User | Error> {
    const entity = getRepository(User);
    if (!name || !email || !password) {
      return new Error(`Incomplete data`);
    }
    if (await entity.findOne({ email })) {
      return new Error(`User ${email} already exists`);
    }
    const user = entity.create({ name, email, password });
    await entity.save(user);
    return user;
  }
}
