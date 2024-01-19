const express = require("express");
const router = express.Router();

const weatherCtrl = require("../controllers/weather");

router.get("/search", weatherCtrl.search);
router.post("/favorites", weatherCtrl.favorites)
router.get("/favorites/view", weatherCtrl.index)
router.delete('/favorites/:id', weatherCtrl.delete)

module.exports = router;
