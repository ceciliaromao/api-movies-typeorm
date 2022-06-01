import { Response } from "express";
import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);
const api = chai.request(app).keepOpen();

describe("/POST auth", () => {
  it("should login with status 200", () => {
    let user = {
      email: "joao@ckl.io",
      password: "123",
    };

    api
      .post("/login")
      .send(user)
      .end((res: Response) => {
        res.should.have.status(200);
      });
  });
});
