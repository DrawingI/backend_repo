const db = require('../../database/mysql/models');

exports.createAuth = async(childid, userid, relationship) => {
    const newAuth = await db.Auth.create({childid, userid, relationship});    
    return newAuth;
}


//childid, user의 id로 식별된 auth 찾기
exports.findOneAuthByIds = async(childid, userid) =>{
    const auth = await db.Auth.findOne({
        where: {childid, userid}
    });
    return auth;
}


