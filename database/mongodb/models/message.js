const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        chatroomId : {
            type: Number,
            required: true,
        },
        userId : {
            type: Number,
            required: true,
        },
        message : {
            type: String,
            required: true,
        },
        timestamp : {
            type: Date,
            default: Date.now,
        }
    },
    {collection : "Messages"}
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;