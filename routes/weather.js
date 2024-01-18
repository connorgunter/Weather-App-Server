const express = require("express");
const router = express.Router();

const weatherCtrl = require("../controllers/weather");

router.get("/search", weatherCtrl.search);
router.post("/favorites", weatherCtrl.favorites)
router.get("/favorites/view", weatherCtrl.index)

module.exports = router;
