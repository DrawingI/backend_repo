const db = require('../../database/mysql/models');

exports.createAuth = async(childid, userid, relationship) => {
    const newAuth = await db.Auth.create({childid, userid, relationship});    
    return newAuth;
}


//childid, user의 id로 식별된 auth 찾기
exports.getOneAuthByIds = async(childid, userid) =>{
    const auth = await db.Auth.findOne({
        where: {childid, userid}
    });
    return auth;
}

exports.getAuthsByUserid = async(userid) =>{
    const auths = await db.Auth.findAll({
        where:{userid}
    });
    return auths;
}

exports.getAuthsByChildid = async(childid) =>{
    const auths = await db.Auth.findAll({
        where:{childid}
    });
    return auths;
}

exports.deleteAuth = async(childid, userid) =>{
    const deletedCount = await db.Auth.destroy({
        where: {childid: childid, userid: userid}
    });
    return deletedCount;
}
