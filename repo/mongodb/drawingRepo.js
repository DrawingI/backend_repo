const DrawingAnalysis = require('../../database/mongodb/models/drawingAnalysis');

module.createDrawingAnalysis = async(testRequestId, imagePathUrl, detections) => {
    const newDrawingAnalysis = await DrawingAnalysis.save({testRequestId,imagePathUrl,detections});
    return newDrawingAnalysis;
}