const Item = require("../models/item.model");
const utilsService = require("../utils/utils.service");

const create = async (item) => {
  try {
    const newItem = new Item(item);
    await newItem.save();

    return utilsService.generateResponse(201, newItem);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

const getAll = async () => {
  try {
    const items = await Item.find({}, "-__v").populate("category");

    return utilsService.generateResponse(200, items);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

const getById = async (id) => {
  try {
    const foundItem = await Item.findById(id, "-__v").populate("category");

    if (!foundItem) {
      throw new Error("Item not found!");
    }

    return utilsService.generateResponse(200, foundItem);
  } catch (err) {
    return utilsService.generateResponse(404, { message: err.message });
  }
};

const updateOne = async (id, body) => {
  try {
    const item = await Item.findById(id).populate("category");

    if (!item) {
      throw new Error("Item not found!");
    }

    for (let key in body) {
      item[key] = body[key];
    }

    await item.save();
    return utilsService.generateResponse(200, item);
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

const deleteOne = async (id) => {
  try {
    const item = await Item.findById(id);

    if (!item) {
      throw new Error("Item not found!");
    }

    await item.remove();
    return utilsService.generateResponse(200, {});
  } catch (err) {
    return utilsService.generateResponse(400, { message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateOne,
  deleteOne,
};
