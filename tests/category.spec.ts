import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);

describe("/GET categories", () => {
  it("should return status 200", async () => {
    const { status } = await chai.request(app).get("/categories");
    status.should.equal(200);
  });
});
