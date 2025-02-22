const express = require('express');
const router = express.Router();
const drawingController = require('../controller/drawingController');

router.post('/createDrawingAnalysis', 
    /*  #swagger.tags=['/drawing'] */
    drawingController.createDrawingAnalysis);

module.exports = router;