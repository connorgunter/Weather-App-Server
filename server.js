require("dotenv").config();
require('./config/db.connection.js')
const { PORT } = process.env;
const weatherRouter = require("./routes/weather.js")
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse json bodies

app.use(cors());
app.use(morgan("dev"));

app.use('/weather', weatherRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));