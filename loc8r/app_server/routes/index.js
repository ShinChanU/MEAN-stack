const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index); // 홈페이지 요청, index 실행

module.exports = router; // app.js <- 사용자의 요청