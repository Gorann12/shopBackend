const shopService = require("../services/shop.service");

const create = async (req, res) => {
    const response = await shopService.create(req.body);

    return res.status(response.statusCode).json(response.body);
}

const getById = async (req, res) => {
    const response = await shopService.getById(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

const getAll = async (req, res) => {
    const response = await shopService.getAll();

    return res.status(response.statusCode).json(response.body);
}

module.exports = {
    create,
    getById,
    getAll
}