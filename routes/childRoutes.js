const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');

//아이 등록 및 Auth 관계 생성
router.post('/createChild', 
    /*  #swagger.tags=['/child'] */
    childController.createChild);

module.exports = router;
