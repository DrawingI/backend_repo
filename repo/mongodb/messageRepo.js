const Message = require('../../database/mongodb/models/message');

exports.saveMessage = async(chatroomId, userId, message) => {
    const messageSaved = await new Message({chatroomId, userId, message}).save();
    return messageSaved;
}

exports.bringMessages = async(chatroomId) =>{
    const messages = await Message.find({chatroomId:chatid});
    return messages;
}