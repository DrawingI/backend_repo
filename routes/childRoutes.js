const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');
const {checkJwt} = require('../middleware/jwtMiddleware');

//아이 등록 및 Auth 관계 생성
router.post('/createChild', checkJwt, childController.createChild);

module.exports = router;
