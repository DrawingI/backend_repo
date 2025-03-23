const DrawingAnalysis = require('../../database/mongodb/models/drawingAnalysis');

exports.createDrawingAnalysis = async(testRequestId, imagePathUrl, detections) => {
    const newDrawingAnalysis = await new DrawingAnalysis({testRequestId,imagePathUrl,detections}).save();
    return newDrawingAnalysis;
}