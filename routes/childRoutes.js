const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');
const {loginJwt, childJwt} = require('../middleware/jwtMiddleware');

//아이 등록 및 Auth 관계 생성
router.post('/createChild', loginJwt, childController.createChild);
router.get('/createChildToken', loginJwt, childController.getChildToken);
router.get('/getChild', loginJwt, childJwt, childController.getChild);


module.exports = router;
