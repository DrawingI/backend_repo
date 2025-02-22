const express = require('express');
const router = express.Router();
const drawingController = require('../controller/drawingController');

router.post('/createDrawingAnalysis', 
    /*  
    #swagger.tags=['미완성 그림관련 api'] 
    #swagger.path="/drawings/createDrawingAnalysis"
    #swagger.description='mongodb api 예시로 만든거'
    */
    drawingController.createDrawingAnalysis);

module.exports = router;