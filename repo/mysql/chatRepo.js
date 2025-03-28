const { Op } = require('sequelize');
const db = require('../../database/mysql/models');

exports.createChat = async(name, authid) =>{
    const newChat = await db.Chat.create({name, authid});
    return newChat;
}

exports.getChatsByChatids = async(chatids) => {
    const chats = await db.Chat.findAll({
        where: {
            id: {[Op.in]: chatids}
        }
    })
    return chats;
}