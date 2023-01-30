const mongoose = require("mongoose");
//var autoIncrement = require('mongoose-auto-increment');


const carSchema = new mongoose.Schema({
    immatriculation : {
        type: String,
        required: true
    },
    marque : {
        type: String,
        required: false
    },
    fleetId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fleet"
    },
    coordinates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "gpsdata"
    }],
    perimeterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "perimeter"
    }
})

const car = mongoose.model("car", carSchema);

//carSchema.plugin(autoIncrement.plugin, {model: 'car', field: 'carId'});

module.exports = car;