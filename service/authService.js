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

exports.getOtherAuthsByChildid = async(childid, userid) =>{
    const auths = await authRepo.getAuthsByChildid(childid);
    return auths.filter(auth => auth.userid !== userid);
}

exports.getAuthsByChildid = async(childid) =>{
    const auths = await authRepo.getAuthsByChildid(childid);
    return auths;
}

exports.getSomeAuthsByChildid = async(childid, userids) =>{
    const auths = await authRepo.getSomeAuthsByChildid(childid, userids);
    return auths;
}

exports.getAuthsByAuthids = async(authids) =>{
    const auths = await authRepo.getAuthsByAuthids(authids);
    return auths;
}

exports.deleteAuth = async(childid, userid) =>{
    const deletedCount = await authRepo.deleteAuth(childid, userid);
    return deletedCount;
}

