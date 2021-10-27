const request = require("supertest");
const app = require("../../app");
const mockCategory = require("../mock-data/category.json");
const Category = require("../../models/category.model");

const endpoint = "/api/categories/";
let id;

describe(endpoint, () => {
  test(`GET ${endpoint}`, async () => {
    const response = await request(app).get(endpoint);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it(`POST ${endpoint}`, async () => {
    await Category.deleteMany({});
    const response = await request(app).post(endpoint).send(mockCategory);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(mockCategory.name);
    expect(response.body.description).toBe(mockCategory.description);
    id = response.body._id;
  });
  it(`GET ${endpoint}:id`, async () => {
    const response = await request(app)
      .get(endpoint + id)
      .send();
    expect(response.statusCode).toBe(200);
  });
});
