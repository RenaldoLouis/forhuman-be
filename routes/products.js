const express = require("express");
const router = express.Router();
const controller = require('../controllers/post')

router.get('/list', controller.getAllProducts)
router.get("/:tag", controller.getProduct);

module.exports = router;
