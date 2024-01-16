const express = require("express");
const router = express.Router();

const weatherCtrl = require("../controllers/weather");

router.get("/search", weatherCtrl.search)

module.exports = router