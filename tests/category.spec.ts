import { Response } from "express";
import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);
const api = chai.request(app).keepOpen();

describe("/GET categories", () => {
  it("should return status 200", () => {
    api.get("/categories").end((res: Response) => {
      res.should.have.status(200);
    });
  });
});
