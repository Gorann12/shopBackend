const shopService = require("../services/shop.service");

const create = async (req, res) => {
    const response = await shopService.create(req.body);

    return res.status(response.statusCode).json(response.body);
}

const getOne = async (req, res) => {
    const response = await shopService.getOne(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

const getAll = async (req, res) => {
    const response = await shopService.getAll();

    return res.status(response.statusCode).json(response.body);
}

module.exports = {
    create,
    getOne,
    getAll
}