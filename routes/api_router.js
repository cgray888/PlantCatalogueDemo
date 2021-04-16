const express = require("express");
const router = express.Router();
const plantAPIController = require("../controllers/plant-api");

router.route("/plants").get(plantAPIController.getAllPlants);

module.exports = router;
