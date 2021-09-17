const express = require('express');
const router = express.Router();
const ctrlLocation = require('../controllers/locations'); // route
const ctrlOthers = require('../controllers/others');

// Locations pages
router.get('/', ctrlLocation.homeList);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

// Other pages 
router.get('/about', ctrlOthers.about); // 홈페이지 요청

module.exports = router; // app.js <- 사용자의 요청