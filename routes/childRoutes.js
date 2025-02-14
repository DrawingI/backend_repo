const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');
const {loginJwt} = require('../middleware/jwtMiddleware');

console.log("childController:", childController);

//아이 등록 및 Auth 관계 생성
router.post('/createChild', loginJwt, childController.createChild);
router.get('/createChildToken', loginJwt, childController.createChildToken);
router.get('/getChild', loginJwt, childController.getChild);

module.exports = router;
