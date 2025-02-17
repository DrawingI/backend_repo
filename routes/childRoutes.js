const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');
const {loginJwt} = require('../middleware/jwtMiddleware');

//아이 등록 및 Auth 관계 생성
router.post('/createChild', loginJwt, childController.createChild);
router.post('/getChildByToken', loginJwt, childController.getChildByToken);
router.post('/createChildToken', loginJwt, childController.createChildToken);
router.get('/getAllChildrenByUser', loginJwt, childController.getAllChildrenByUser);

module.exports = router;
