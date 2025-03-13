const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');
const {loginJwt} = require('../middleware/jwtMiddleware');

router.post('/createChat', loginJwt, chatController.createChat);