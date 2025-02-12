const db = require('../../database/mysql/models');

exports.createAuth = async( childid, userid, relationship) => {
    const newAuth = await db.Auth.create({childid, userid, relationship});    
    return newAuth;
}
