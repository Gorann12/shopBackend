const itemService = require("../services/item.service");

const create = async (req, res) => {
    const response = await itemService.create(req.body);

    return res.status(response.statusCode).json(response.body);
}

const getAll = async (req, res) => {
    const response = await itemService.getAll();

    return res.status(response.statusCode).json(response.body);
}

const getOne = async (req, res) => {
    const response = await itemService.getOne(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

const updateOne = async (req, res) => {
    const response = await itemService.updateOne(req.params.id, req.body);

    return res.status(response.statusCode).json(response.body);
}

const deleteOne = async (req, res) => {
    const response = await itemService.deleteOne(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne
}