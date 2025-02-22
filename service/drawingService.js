const drawingRepo = require('../repo/mongodb/drawingRepo')

exports.createDrawingAnalysis = async (testRequestId, imagePathUrl, detections ) => {
    const newDrawingAnalysis = await drawingRepo.createDrawingAnalysis(testRequestId, imagePathUrl, detections);
    return newDrawingAnalysis;
}