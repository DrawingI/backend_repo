const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema(
    {
        chatRoomId: {
            type: Number, 
            required: true,
            unique: true,
        },
        userID: {
            type: Number, 
            required: true,
        },
        date: {  
            type: Date,
            required: true,
            default: Date.now, 
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } 
};


const Chatroom = mongoose.model("Chat", chatroomSchema);


module.exports = Chatroom;
