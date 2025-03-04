const authRepo = require('../repo/mysql/authRepo');
const userService = require('../service/userService');

exports.createAuth = async(childid, userid, relationship) => {
    const newAuth = await authRepo.createAuth(childid, userid, relationship);
    return newAuth;
}

exports.getOneAuthByIds = async(childid, userid) =>{
    const auth = await authRepo.getOneAuthByIds(childid, userid);
    return auth;
}

exports.getAuthsByUserid = async(userid) => {
    const auths = await authRepo.getAuthsByUserid(userid);
    return auths;
}

//채팅 기능때 사용할려고 만듬
exports.getAuthsByChildid = async(childid) =>{
    const auths = await authRepo.getAuthsByChildid(childid);
    return auths;
}

exports.deleteAuth = async(childid, userid) =>{
    const deletedCount = await authRepo.deleteAuth(childid, userid);
    return deletedCount;
}

