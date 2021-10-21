const listService = require("../services/list.service");;

const create = async (req, res) => {
    const response = await listService.create(req.body);

    return res.status(response.statusCode).json(response.body);
}

const getAll = async (req, res) => {
    const response = await listService.getAll();

    return res.status(response.statusCode).json(response.body);
}

const getOne = async (req, res) => {
    const response = await listService.getOne(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

const updateOne = async (req, res) => {
    const response = await listService.updateOne(req.params.id, req.body);

    return res.status(response.statusCode).json(response.body);
}

const deleteOne = async (req, res) => {
    const response = await listService.deleteOne(req.params.id);
    
    return res.status(response.statusCode).json(response.body);
}

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne
}