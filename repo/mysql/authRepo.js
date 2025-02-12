const db = require('../../database/mysql/models');

exports.createAuth = async( childid, userid, relationship) => {
    const newAuth = await db.Auth.create({childid, userid, relationship});    
    return newAuth;
}

exports.findAuth = async(childid, userid) =>{
    const auth = await db.Auth.findOne({
        where: {childid, userid}
    });
    return auth;
}
