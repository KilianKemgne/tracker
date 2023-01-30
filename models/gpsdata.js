const mongoose = require("mongoose");

const gpsdataSchema = new mongoose.Schema({
    latitude : {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    vitesse: {
        type: String,
        required: true
    }
});

const gpsdata = mongoose.model("gpsdata", gpsdataSchema);

module.exports = gpsdata;