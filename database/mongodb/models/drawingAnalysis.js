const mongoose = require('mongoose');

const drawingAnalysisSchema = new mongoose.Schema(
    {
        testRequestId : {
            type : String,
            required : true,
            unique : true,
            trim : true,
        },
        imagePathUrl : {
            type : String,
            required: true,
        },
        detections : [
           {
            label : {
                type : String,
                required : true,
            },
            confidence : {
                type: Number,
                required: true,
                min: 0,
                max: 1
            }
           }
        ]
    },
    { collection : "DrawingAnalyses" }
);

const DrawingAnalysis = mongoose.model("DrawingAnalysis", drawingAnalysisSchema);

module.exports = DrawingAnalysis;
