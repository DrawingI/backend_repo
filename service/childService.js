const childRepo = require('../repo/mysql/childRepo');
const authService = require('./authService');

exports.createChild = async(identityNo, gender, name, profImgUrl, userid, relationship) => {
    const newChild = await childRepo.createChild(identityNo, gender, name, profImgUrl, userid, relationship);
    const newAuth = await authService.createAuth(identityNo, userid, relationship);
    return {newChild, newAuth};
}