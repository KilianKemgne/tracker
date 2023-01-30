const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlFleet = require('../controllers/fleet.controller');
const crtlGpsdata = require('../controllers/gpsdata.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/update-user', ctrlUser.update)

router.post('/newFleet', ctrlFleet.newFleet)
router.get('/fleet', ctrlFleet.fleet)

router.post("/saveGpsdata", crtlGpsdata.saveGpsdata)
router.get("/getGpsdata", crtlGpsdata.getGpsdata)

router.get('/', () => console.log("bonjour"))
module.exports = router;



