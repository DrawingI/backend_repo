const DrawingAnalysis = require('../database/mongodb/models/drawingAnalysis');

// API to store drawing analysis data
exports.createDrawingAnalysis = async (req, res) => {
    try {
        const { testRequestId, imagePathUrl, detections } = req.body;

        const newDrawingAnalysis = new DrawingAnalysis({
            testRequestId,
            imagePathUrl,
            detections,
        });

        await newDrawingAnalysis.save();

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
