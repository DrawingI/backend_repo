const authRepo = require('../repo/mysql/authRepo');

exports.createAuth = async(identityNo, userid, relationship) => {
    const newAuth = await authRepo.createAuth(identityNo, userid, relationship);
    return newAuth;
}