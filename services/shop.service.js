const Shop = require("../models/shop.model");
const utilsService = require("../utils/utils.service");

const create = async (shop) => {
  try {
    const newShop = new Shop(shop);
    await newShop.save();

    return utilsService.generateResponse(200, newShop);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

const getById = async (id) => {
  try {
    const foundShop = await Shop.findById(id, "-__v");

    if (!foundShop) {
      throw new Error("Shop not found!");
    }

    return utilsService.generateResponse(200, foundShop);
  } catch (err) {
    return utilsService.generateResponse(404, { message: err.message });
  }
};

const getAll = async () => {
  try {
    const shops = await Shop.find({}, "-__v");

    return utilsService.generateResponse(200, shops);
  } catch (err) {
    return utilsService.generateResponse(404, { message: err.message });
  }
};

module.exports = {
  create,
  getById,
  getAll,
};
