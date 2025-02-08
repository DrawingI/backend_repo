const drawingService = require('../service/drawingService');

// API to store drawing analysis data
exports.createDrawingAnalysis = async (req, res) => {
    try {
        const { testRequestId, imagePathUrl, detections } = req.body;
        const newDrawingAnalysis = await drawingService.createDrawingAnalysis(testRequestId, imagePathUrl, detections);
        
        res.status(201).json({
            message: '✅ Drawing analysis data saved successfully',
            data: newDrawingAnalysis,
        });
    } catch (error) {
        res.status(500).json({
            message: '❌ Error saving drawing analysis data',
            error: error.message,
        });
    }
};
