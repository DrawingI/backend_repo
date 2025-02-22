const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/createUser', 
    /* 
    #swagger.tags=['회원관리']
    #swagger.path="/users/createUser"
    #swagger.description='회원가입'
    */
    userController.createUser);
// router.get('/:id', );
// router.delete('/:id', );

module.exports = router;