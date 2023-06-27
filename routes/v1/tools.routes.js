const express = require('express');
const toolsController = require('../../controllers/tools.controllers');
const router = express.Router();

router.get('/', toolsController.getAllTools);

module.exports = router;
