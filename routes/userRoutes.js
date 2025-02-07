const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.post('/createUser', 
    /*  #swagger.tags=['/user'] */
    userController.createUser);
// router.get('/:id', );
// router.delete('/:id', );

module.exports = router;