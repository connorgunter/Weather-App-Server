const express = require("express");
const { Weather } = require("../models");
const ROOT_URL = "http://api.weatherapi.com/v1/current.json?"
// key=a0b781efac804b38962204907240901&q=03901"
const search = async (req,res) => {
    const q = req.query.q;
    try {
        res.json(await Weather.find())
    } catch (err){
        res.status(400).json({err})
    }
}
module.exports = {
    index
}