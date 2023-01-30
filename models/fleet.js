const mongoose = require("mongoose");

const fleetSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    cars : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "car"
    }],
    perimeterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "perimeter"
    }
})

const fleet = mongoose.model("fleet", fleetSchema);

module.exports = fleet;