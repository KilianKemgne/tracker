const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const gpsdata = require('../models/gpsdata')

module.exports.saveGpsdata = (req,res) => {
    const {latitude, longitude, vitesse, updatedate, altitude, cardId} = req.body;
    let errors = [];
  
    if(!latitude || !longitude || !vitesse || !cardId){
      errors.push({msg : "Parameters are missing"});
    }
    if(errors.length>0){
      res.json({Message : errors})
    }else{
      const newgpsdata = new gpsdata({
        latitude, longitude, vitesse, updatedate, altitude, cardId
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
    var carId = req.params.carId;  
    gpsdata.find({carId: carId}).exec((err, notenumber)=>{
      console.log(notenumber);
      res.json(notenumber);
    });
  }