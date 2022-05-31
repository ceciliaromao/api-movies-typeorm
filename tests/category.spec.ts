import { Response } from "express";
import app from "../src/server";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);
const api = chai.request(app).keepOpen();

describe("/GET to return categories array ", () => {
  it("shoud return status 200", () => {
    api.get("/categories").end((res: Response) => {
      expect(res.status).to.be.equal(200);
    });
  });
});
