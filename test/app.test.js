// test/app.test.js
const request = require("supertest");
const app = require("../index"); // Assuming your index.js exports the app

describe("GET /", () => {
  it("should return Hello, world!", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello, world!");
  });
});
