const request = require("supertest");
const app = require("./app");

test("POST/ should return an object", async () => {
  const Test_Data = {
    name: "Test Name",
    description: "Test location",
    address: "Loca, Loca Street,  Singapore 11111",
    postal_code: "111111"
  };
  const response = await request(app)
    .post("/data")
    .send(Test_Data);
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(Test_Data);
});
