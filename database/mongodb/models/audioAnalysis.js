const mongoose = require('mongoose');

const audioAnalysisSchema = new mongoose.schema(
    {
        testRequestId : {
            type : String,
            required : true,
            unique : true,
            trim : true,
        },
        audioPathUrl : {
            type : String,
            required: true,
        },
        transcript : {
            type : String,
            required: true,
        },
        confidence : {
            type: Number,
            required: true,
            min: 0,
            max: 1
        }
    },
    {collection : "AudioAnalyses"}
);

const AudioAnalysis = mongoose.model("AudioAnalysis", audioAnalysisSchema);

module.exports = AudioAnalysis;