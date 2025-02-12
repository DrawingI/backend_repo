const authRepo = require('../repo/mysql/authRepo');

exports.createAuth = async(childid, userid, relationship) => {
    const newAuth = await authRepo.findAuth(childid, userid);
    if(newAuth){
        newAuth = null;
        return newAuth;
    }
    newAuth = await authRepo.createAuth(childid, userid, relationship);
    return newAuth;
}

