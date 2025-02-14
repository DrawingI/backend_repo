const authRepo = require('../repo/mysql/authRepo');
const userService = require('../service/userService');

exports.createAuth = async(childid, userid, relationship) => {
    const newAuth = await authRepo.createAuth(childid, userid, relationship);
    return newAuth;
}

exports.findOneAuthByIds = async(childid, userid) =>{
    const auth = await authRepo.findOneAuthByIds(childid, userid);
    return auth;
}



