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
    },
    updatedate: {
        type: Date,
        default: Date.now(),
        required: false
    },
    altitude: {
        type: String,
        required: false
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "car"
    }
});

const gpsdata = mongoose.model("gpsdata", gpsdataSchema);

module.exports = gpsdata;