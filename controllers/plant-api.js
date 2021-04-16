var plants = [
  {
    name: "Test",
    description: "test",
    image: "Test.jpg",
  },
];

// GET Request Handler
const getAllPlants = (req, res) => {
  if (typeof plants === "object" && Array.isArray(plants)) {
    res.status(200).json(plants);
  } else {
    res.status(400).send("Bad Request");
  }
};

module.exports = {
  getAllPlants,
};
