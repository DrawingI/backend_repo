const express = require('express');
const router = express.Router();
const childController = require('../controller/childController');
const {loginJwt} = require('../middleware/jwtMiddleware');

//아이 등록 및 Auth 관계 생성
router.post('/createChild', loginJwt, 
    /*  #swagger.tags=['아이관리']
        #swagger.path="/child/createChild" 
        #swagger.description='아이 등록하기'
    */
    childController.createChild);
router.post('/getChildByToken', loginJwt, 
    /*  #swagger.tags=['아이관리'] 
        #swagger.path="/child/getChildByToken"
        #swagger.description='아이 불러오기'
    */
    childController.getChildByToken);
router.post('/createChildToken', loginJwt, 
    /*  #swagger.tags=['아이관리']
        #swagger.path="/child/createChildToken" 
        #swagger.description='아이 공유하기 토큰 생성'
    */
    childController.createChildToken);
router.get('/getAllChildrenByUser', loginJwt, 
    /*  #swagger.tags=['아이관리']
        #swagger.path="/child/getAllChildrenByUser" 
        #swagger.description='회원의 모든 아이 반환'
    */
    childController.getAllChildrenByUser);

module.exports = router;
