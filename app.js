require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
var http = require('http');
var url = require('url');

const rtsIndex = require('./routes/index.router');

var app = express();

//implementer le handshake entre le module et la plateforme
let i=1

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

// http.createServer(function (req, res) {

//     if(req.url!=='/favicon.ico'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
  
//         var q = url.parse(req.url, true).query;
      
//       //Query the db to verify if the tracker is register
      
//       let imei= q.imei
//       1
//       //Check if DB contains IMEI
//           //Yes pursue
      
//           //Not respond with an error message : TRACKER NOT LOGGED
      
//       //
      
      
//       var txt = q.la + " " + q.lo+" "+q.spd;
    
  
  
  
//       /// LOAD THE CENTER OF THE SECURED PERIMETER
//         let la1=3.780796
//         let lo1= 11.487077
  
  
//         /*/*/////
      
//         let lo2=parseFloat(q.lo) 
      
//         console.log("Your lo :"+lo2)
        
//         let la2=parseFloat(q.la);
        
//         console.log("Your la :"+la2)

//         let spd2=parseFloat(q.spd);
        
//         console.log("Your la :"+spd2)

//         const newgpsdata = new gpsdata({
//             la2, lo2, spd2
//           });

//           router.post("/saveGpsdata",newgpsdata);
//       //Get the secured radius
//         let srad=30
      
//       //end f get the secured radius
      
//       let R=6371e3
//       let phi1=la1*Math.PI/180
//       let phi2=la2*Math.PI/180
//       let Dphi=(la2-la1)*Math.PI/180
//       let Dlmda=(lo2-lo1)*Math.PI/180
      
//       const a = Math.sin(Dphi/2)*Math.sin(Dphi/2)+Math.cos(phi1)*Math.cos(phi2)*Math.sin(Dlmda/2)*Math.sin(Dlmda/2)
      
//       const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))
      
//       const d =R*c;
      
//       console.log("The distance beetween is: "+d)
      
//       // insert the data in the database
      
//       //if not response with an error message 
      
      
      
//       if(d<srad){
//         console.log("secured zone")
//       }else{
//         console.log("Perimeter is unsecured")
//       }
      
      
//       console.log("end"+i)
      
//       i++
      
      
        
//     }
//     res.end(txt);
//   }).listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));