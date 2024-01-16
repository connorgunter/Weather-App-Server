const express = require("express");
const { Weather } = require("../models/weather");
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
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
  }
};
module.exports = {
  search,
};
