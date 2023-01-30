const mongoose = require("mongoose");
//const autoIncrement = require('mongoose-auto-increment');

const perimeterSchema = new mongoose.Schema({
    pays : {
        type: String,
        required: true
    },
    centre : {
        type: String,
        required: true
    },
    rayon : {
        type: Number,
        required: true
    },
    ville : {
        type: String,
        required: true
    },
    fleetID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fleet"
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fleet"
    }
});

const perimeter = mongoose.model("perimeter", perimeterSchema);

//perimeterSchema.plugin(autoIncrement.plugin, {model: 'perimeter', field: 'perimeterId'});

module.exports = perimeter;