const childRepo = require('../repo/mysql/childRepo');
const authService = require('./authService');

exports.createChild = async(gender, name, profImgUrl, userid, relationship) => {
    const newChild = await childRepo.createChild(gender, name, profImgUrl, userid, relationship);
    const newAuth = await authService.createAuth(newChild.id, userid, relationship);
    return {newChild, newAuth};
}

exports.findChild = async(id, userid) => {
    const child = await childRepo.findChild(id, userid);
    return child;
}