const express = require("express");
const router = express.Router();
const plantAPIController = require("../controllers/plant-api");

router
  .route("/plants")
  .get(plantAPIController.getAllPlants)
  .post(plantAPIController.createPlant);

router
  .route("/plants/:plant_id")
  .put(plantAPIController.updatePlant)
  .delete(plantAPIController.deletePlant);

module.exports = router;
