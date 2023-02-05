const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Fleet = require('../models/fleet');

module.exports.newFleet = (req, res, next) => {
    var fleet = new Fleet();
    fleet.name = req.body.name;
    fleet.owner= req.body.owner;
    fleet.save()
   
    .then(() => res.status(201).json({ message: 'Fleet Save !'}))
    .catch(error => res.status(400).json({ error }));
    
}

module.exports.fleet = (req, res, next) => {
    
    Fleet.find()
    
        .then(fleets => res.status(200).json(fleets))
    .catch(error => res.status(400).json({ error }));
}


