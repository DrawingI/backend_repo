const { Op } = require('sequelize');
const db = require('../../database/mysql/models');

exports.addMembers = async(chatid, auths) =>{
    const newMembersData = auths.map(auth =>({
        chatid: chatid,
        authid: auth.id
    }));

    const newMembers = await db.ChatMember.bulkCreate(newMembersData);
    return newMembers;
}

exports.getChatsByAuths = async(auths) => {
    const memberChats = await db.ChatMember.findAll({
        where: {
            authid:{[Op.in]: auths.map(auth => auth.id)}
        }
    })
    return memberChats;
}

