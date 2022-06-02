import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);

describe("/POST auth", () => {
  it("should login with status 200", async () => {
    let user = {
      email: "joao@ckl.io",
      password: "1234",
    };

    const { status, body } = await chai.request(app).post("/login").send(user);
    global.token = body.token;
    status.should.equal(200);
  });
});
