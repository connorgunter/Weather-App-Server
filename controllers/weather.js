const express = require("express");
const { Weather } = require("../models/weather");
const User  = require("../models/user")
const ROOT_URL = "http://api.weatherapi.com/v1/forecast.json?";
const token = process.env.API_KEY;
// key=a0b781efac804b38962204907240901&q=03901"
// http://api.weatherapi.com/v1/current.json?key=a0b781efac804b38962204907240901&q=03901
const search = async (req, res) => {
  const q = req.query.q;
  console.log("search q: ", q);
  try {
    const response = await fetch(`${ROOT_URL}key=${token}&q=${q}`);
    const data = await response.json();
    console.log({data});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
  }
};
async function favorites(req, res, next) {
try {
  const user = await User.findOne({ authId: req.body.authId })
  if (user) {
    const updatedUser = await User.findOneAndUpdate(
      { authId: req.body.authId },
      {$push: {favorites: req.body.favorites}},
      { new: true }
    );
    res.json(updatedUser);
  } else {
    const newUser = await User.create(req.body);
    res.json(newUser);
  }
} catch (error) {
  console.error(error);
  res.status(400).json(error);
}
};

async function index(req, res) {
  try {
    res.json(await User.find())
    // console.log("req", req.body)
  } catch(err){
    console.log(err)
  }
}

module.exports = {
  search,
  favorites,
  index
};
