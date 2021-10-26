const Category = require("../models/category.model");
const utilsService = require("../utils/utils.service");

const create = async (category) => {
  try {
    const newCategory = new Category(category);
    await newCategory.save();

    return utilsService.generateResponse(201, newCategory);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

const getById = async (id) => {
  try {
    const foundCategory = await Category.findById(id, "-__v");

    if (!foundCategory) {
      throw new Error("Category not found!");
    }

    return utilsService.generateResponse(200, foundCategory);
  } catch (err) {
    return utilsService.generateResponse(404, { message: err.message });
  }
};

const getAll = async () => {
  try {
    const categories = await Category.find({}, "-__v");

    return utilsService.generateResponse(200, categories);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

module.exports = {
  create,
  getById,
  getAll,
};
