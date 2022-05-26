import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
