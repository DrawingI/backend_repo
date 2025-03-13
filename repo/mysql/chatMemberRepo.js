const { Op } = require('sequelize');
const db = require('../../database/mysql/models');

exports.addMember = async(chatid, authid) =>{
    const newMember = await db.ChatMember.create({chatid, authid});
    return newMember;
}