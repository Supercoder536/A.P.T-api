const asynchandler = require('express-async-handler')
const areaSchema = require('../models/areaSchema.js')

//@desc     Get Areas
//@method   GET api/areas
//@access   Private
const getAreas = asynchandler(async (req, res) => {
  const areas = await areaSchema.find();
  res.status(200).json({areas})
});

//@desc     Create Area
//@method   POST api/areas
//@access   Private
const createArea = (req, res) => {
  const {name, banner, user} = req.body
  if(!name || !banner || !user){
    res.status(400)
    throw new Error("Invalid Params")
  }
  const area = await areaSchema.create({
    name,
    banner,
    user,
  })
  res.status(200).json(area)
};

//@desc     Update Area
//@method   PUT api/areas/:id
//@access   Private
const updateArea = (req, res) => {
  const area = await areaSchema.findById(req.params.id)
  if(!area){
    res.status(400)
    throw new Error("No such area exsists")
  }
  const updatedArea = await areaSchema.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json(updatedArea)
};

//@desc     Delete Area
//@method   DEL api/areas/:id
//@access   Private
const deleteArea = (req, res) => {
  const area = await areaSchema.findById(req.params.id)
  if(!area){
    res.status(400)
    throw new Error("No such area exsists")
  }
  await area.remove()
  res.status(200).json({id: req.params.id})
};

module.exports = {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
};
