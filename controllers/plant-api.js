const Pool = require("pg").Pool;

// GET Request Handler
const getAllPlants = (req, res) => {
  pool.query("SELECT * FROM plant ORDER BY plant_id ASC", (error, results) => {
    if (error) {
      res.status(400).send("Bad Request");
    }
    res.status(200).json(results.rows);
  });
};

// POST Request Handler
const createPlant = (req, res) => {
  const {name, description, price, image} = req.body;
  pool.query(
    "INSERT INTO plant (name, description, price, image) VALUES ($1, $2, $3, $4)",
    [name, description, price, image],
    (error, results) => {
      if (error) {
        res.status(400).send("Bad Request");
      }
      res
        .status(201)
        .send(`A new plant has been added added: ${results.rows[0]}`);
    },
  );
};

// PUT Handler
const updatePlant = (req, res) => {
  const plant_id = parseInt(req.params.plant_id);
  const {name, description, price, image} = req.body;

  pool.query(
    "UPDATE plant SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5",
    [name, description, price, image, plant_id],
    (error, results) => {
      if (error) {
        res.status(400).send("Bad Request");
      }
      res.status(200).send(`Plant modified with ID: ${id}`);
    },
  );
};

// DELETE Handler
const deletePlant = (req, res) => {
  const plant_id = parseInt(req.params.plant_id);
  pool.query(
    "DELETE FROM plant WHERE plant_id = $1",
    [plant_id],
    (error, results) => {
      if (error) {
        res.status(400).send("Bad Request");
      }
      res.status(200).send(`Plant deleted with ID: ${id}`);
    },
  );
};

module.exports = {
  getAllPlants,
  createPlant,
  updatePlant,
  deletePlant,
};
