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
router.get('/findChats', loginJwt, 
    /*  
        #swagger.tags=['채팅']
        #swagger.path="/chat/findChats" 
        #swagger.description='회원이 참여하는 채팅방 불러오기'
    */    
    chatController.findChats);

router.post('/findChatMembers', loginJwt, 
    /*  
        #swagger.tags=['채팅']
        #swagger.path="/chat/findChatMembers" 
        #swagger.description='채팅방의 참여하는 회원 불러오기'
    */    
    chatController.findChatMembers);

module.exports = router;