import { Response } from "express";
import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);
const api = chai.request(app).keepOpen();

describe("/POST to create new user", () => {
  it("should return status 201", () => {
    const data = {
      name: "Joana",
      email: "joana@ckl.io",
      password: 123,
    };
    api
      .post("/user")
      .send(data)
      .end((res: Response) => {
        res.should.have.status(201);
      });
  });

  it("should return status 400", () => {
    const data = {
      name: "Joao",
      email: "joao@ckl.io",
      password: 123,
    };
    api
      .post("/user")
      .send(data)
      .end((res: Response) => {
        res.should.have.status(400);
      });
  });
});
