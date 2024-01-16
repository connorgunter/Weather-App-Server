const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeatherSchema = new Schema(
    {
        dates: Date,
        temp_f: Number,
        temp_c: Number,
        feelslike_f: Number,
        feelslike_c: Number,
        wind_mph: Number,
        condition: String
    }
)

module.exports =  mongoose.model("Weather", WeatherSchema)