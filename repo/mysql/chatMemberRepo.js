const db = require('../../database/mysql/models');

exports.addMembers = async(chatid, auths) =>{
    const newMembersData = auths.map(auth =>({
        chatid: chatid,
        authid: auth.id
    }));

    const newMembers = await db.ChatMember.bulkCreate(newMembersData);
    return newMembers;
}