const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Car = require('../models/car');

module.exports.newCar = (req, res, next) => {
    var car = new Car();
    car.matriculation = req.body.matriculation;
    car.brand = req.body.brand;
    car.fleet = req.body.fleet;
    car.save()
   
    .then(() => res.status(201).json({ message: 'Car Save !'}))
    .catch(error => res.status(400).json({ error }));
    
}

module.exports.car = (req, res, next) => {
    
    Car.find()
    
        .then(cars => res.status(200).json(cars))
    .catch(error => res.status(400).json({ error }));
}
