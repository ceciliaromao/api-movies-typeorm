import app from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.should();
chai.use(chaiHttp);
//const api = chai.request(app).keepOpen();

describe("/POST to create new user", () => {
  it("should create new user", async (done) => {
    const data = {
      name: "Joana",
      email: "joana@ckl.io",
      password: 123,
    };
    const { status } = await chai.request(app).post("/user").send(data);
    status.should.equal(201);
    done();
  });

  it("should not create user with existent email", async (done) => {
    const data = {
      name: "Joana",
      email: "joana@ckl.io",
      password: 123,
    };
    const { status } = await chai.request(app).post("/user").send(data);
    status.should.equal(400);
    done();
  });
});
