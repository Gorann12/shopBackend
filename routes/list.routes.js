const express = require("express");
const router = express.Router();
const listController = require("../controllers/list.controller");

router.post('/', listController.create);
router.get('/', listController.getAll);
router.get('/:id', listController.getOne);
router.patch('/:id', listController.updateOne);
router.delete('/:id', listController.deleteOne);

module.exports = router;