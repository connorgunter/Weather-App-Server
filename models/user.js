const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    favorites: [{
        name:String,
        locationData: Object
    }]
})

module.exports = mongoose.model("User", UserSchema)