const DrawingAnalysis = require('../../database/mongodb/models/drawingAnalysis');

exports.createDrawingAnalysis = async(testRequestId, imagePathUrl, detections) => {
    const createDrawingAnalysis = new DrawingAnalysis({testRequestId,imagePathUrl,detections});
    const newDrawingAnalysis = await createDrawingAnalysis.save();
    return newDrawingAnalysis;
}