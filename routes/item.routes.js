const express = require('express');
const router = express.Router();
const itemController = require("../controllers/item.controller");

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getById);
router.patch('/:id', itemController.updateOne);
router.delete('/:id', itemController.deleteOne);

module.exports = router;