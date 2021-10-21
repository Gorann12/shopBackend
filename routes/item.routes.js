const express = require('express');
const router = express.Router();
const itemController = require("../controllers/item.controller");

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);
router.patch('/:id', itemController.updateOne);
router.delete('/:id', itemController.deleteOne);

module.exports = router;