//@desc     Get Areas
//@method   GET api/areas
//@access   Private
const getAreas = (req, res) => {
  res.status(200).json({ message: "Get Areas" });
};

//@desc     Create Area
//@method   POST api/areas
//@access   Private
const createArea = (req, res) => {
  res.status(200).json({ message: "Create Area" });
};

//@desc     Update Area
//@method   PUT api/areas/:id
//@access   Private
const updateArea = (req, res) => {
  res.status(200).json({ message: `Update Area ${req.params.id}` });
};

//@desc     Delete Area
//@method   DEL api/areas/:id
//@access   Private
const deleteArea = (req, res) => {
  res.status(200).json({ message: `Delete Area ${req.params.id}` });
};

module.exports = {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
};
