const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/', 
    /*  
    #swagger.tags=['회원관리']
    #swagger.path="/login/" 
    #swagger.description='로그인'    
    */

    loginController.login);

module.exports = router;