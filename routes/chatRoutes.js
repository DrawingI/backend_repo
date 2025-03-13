const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');
const { loginJwt } = require('../middleware/jwtMiddleware');

router.post('/findUsersToChat', loginJwt, 
    /*  
        #swagger.tags=['채팅']
        #swagger.path="/chat/findUsersToChat" 
        #swagger.description='채팅 참여 가능한 회원 불러오기'
    */    
    chatController.findUsersToChat);
router.post('/createChat', loginJwt, 
    /*  
        #swagger.tags=['채팅']
        #swagger.path="/chat/createChat" 
        #swagger.description='채팅방 만들기'
    */
    chatController.createChat);

module.exports = router;