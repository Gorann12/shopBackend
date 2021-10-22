const List = require("../models/list.model");
const utilsService = require("../utils/utils.service");

const create = async (list) => {
    try {
        const newList = await new List(list);
        await newList.save();

        return utilsService.generateResponse(201, newList);
    } catch(err) {
        return utilsService.generateResponse(400, err.message);
    }
}

const getAll = async () => {
    try {
        const lists = await List.find({}, '-__v').populate('items shop');

        return utilsService.generateResponse(200, lists);
    } catch(err) {
        return utilsService.generateResponse(400, err.message);
    }
}

const getById = async (id) => {
    try {
        const foundList = await List.findById(id).populate("items shop");

        if(!foundList) {
            throw new Error("List not found");
        }

        return utilsService.generateResponse(200, foundList);
    } catch(err) {
        return utilsService.generateResponse(400, err.message);
    }
}

const updateOne = async (id, body) => {
    try {
        const list = await List.findById(id);

        for(let key in body) {
            list[key] = body[key];
        }

        const updatedList = await list.save();
        return utilsService.generateResponse(200, updatedList);
    } catch(err) {
        return utilsService.generateResponse(400, err.message);
    }
}

const deleteOne = async (id) => {
    try {
        const listToBeDeleted = await List.findById(id);

        if(!listToBeDeleted) {
            throw new Error("There is no such list!");
        }

        await listToBeDeleted.remove();
        return utilsService.generateResponse(200, {});
    } catch(err) {
        return utilsService.generateResponse(400, err.message);
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateOne,
    deleteOne
}