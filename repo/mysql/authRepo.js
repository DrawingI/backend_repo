const db = require('../../database/mysql/models');

exports.createAuth = async(identityNo, userid, relationship) => {
    const newAuth = await db.Auth.create({identityNo, userid, relationship});    
    return newAuth;
}
