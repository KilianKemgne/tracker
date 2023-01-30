const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const gpsdata = require('../models/gpsdata')

module.exports.saveGpsdata = (req,res) => {
    const {latitude, longitude, vitesse} = req.body;
    let errors = [];
  
    if(!latitude || !longitude || !vitesse){
      errors.push({msg : "Parameters are missing"});
    }
    if(errors.length>0){
      res.json({Message : errors})
    }else{
      const newgpsdata = new gpsdata({
        latitude, longitude, vitesse
      });
  
      newgpsdata
      .save()
      .then(newgpsdata => {
        res.json({ Message: "Data Inserted"});
      })
      .catch(err => console.log(err));
    }
}

module.exports.getGpsdata = (req,res) =>{
    gpsdata.findOne({carId: req.params.carId}).exec((err, gpsdata)=>{
        if (!gpsdata)
            return res.status(404).json({ status: false, message: 'Gpsdata record not found.' });
        else
            return res.status(200).json(gpsdata);
    });
  }