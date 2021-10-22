const categoryService = require("../services/category.service");

const create = async (req, res) => {
    const response = await categoryService.create(req.body);

    return res.status(response.statusCode).json(response.body);
}

const getById = async (req, res) => {
    const response = await categoryService.getById(req.params.id);

    return res.status(response.statusCode).json(response.body);
}

const getAll = async (req, res) => {
    const response = await categoryService.getAll();

    return res.status(response.statusCode).json(response.body);
}

module.exports = {
    create,
    getById,
    getAll
}