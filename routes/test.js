const express = require('express')
const router = express.Router()
const testController = require("../controllers/test")

router.get('/', testController.getTest)

module.exports = router