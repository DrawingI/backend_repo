const authRepo = require('../repo/mysql/authRepo');

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

exports.getAuthsByChildid = async(childid, userid) =>{
    const auths = await authRepo.getAuthsByChildid(childid, userid);
    return auths;
}

exports.getAuthsOfUsers = async(users) => {
    const auths = await authRepo.getAuthsOfUsers(users);
    return auths;
}

exports.deleteAuth = async(childid, userid) =>{
    const deletedCount = await authRepo.deleteAuth(childid, userid);
    return deletedCount;
}

