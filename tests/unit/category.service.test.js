const categoryService = require("../../services/category.service");
const Category = require("../../models/category.model");
const utilsService = require("../../utils/utils.service");
const mockCategory = require("../mock-data/category.json");
const categories = require("../mock-data/categories.json");
const id = "23aeflssj";

jest.mock("../../models/category.model");
const generateResponse = utilsService.generateResponse;
utilsService.generateResponse = jest.fn();

describe("categoryService.create", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should have create function", () => {
    expect(typeof categoryService.create).toBe("function");
  });
  it("should call constructor function", async () => {
    await categoryService.create(mockCategory);
    expect(Category).toBeCalledWith(mockCategory);
  });
  it("Should call utilsService.generateResponse", async () => {
    await categoryService.create(mockCategory);
    expect(utilsService.generateResponse).toBeCalled();
  });
  it("Should handle errors", async () => {
    Category.mockReturnValue({});
    await categoryService.create(mockCategory);
    expect(utilsService.generateResponse).toBeCalledWith(400, {
      message: "newCategory.save is not a function",
    });
  });
});

describe("categoryService.getAll", () => {
  it("should have getAll function", () => {
    expect(typeof categoryService.getAll).toBe("function");
  });
  it("should call Model.find function without v", async () => {
    await categoryService.getAll();
    expect(Category.find).toBeCalledWith({}, "-__v");
  });
  it("should return statusCode and list of categories", async () => {
    utilsService.generateResponse = generateResponse;
    Category.find.mockReturnValue(categories);
    const output = await categoryService.getAll();
    expect(output.statusCode).toBe(200);
    expect(Array.isArray(output.body)).toBeTruthy();
  });
});

describe("categoryService.getById", () => {
  beforeEach(() => {
    utilsService.generateResponse = jest.fn();
  });
  it("Should have getById function", () => {
    expect(typeof categoryService.getById).toBe("function");
  });
  it("Should call Model.findById fucntion without v", async () => {
    await categoryService.getById(id);
    expect(Category.findById).toBeCalledWith(id, "-__v");
  });
  it("Should throw 404 if category isn't found", async () => {
    Category.findById.mockReturnValue(null);
    await categoryService.getById(id);
    expect(utilsService.generateResponse).toBeCalledWith(404, {
      message: "Category not found!",
    });
  });
  it("Should return body and statusCode", async () => {
    Category.findById.mockReturnValue(mockCategory);
    utilsService.generateResponse = generateResponse;
    const output = await categoryService.getById(id);
    expect(output.statusCode).toBe(200);
    expect(output.body).toBe(mockCategory);
  });
});
