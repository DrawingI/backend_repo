const childRepo = require('../repo/mysql/childRepo');
const authService = require('./authService');

//아이등록
exports.createChild = async(gender,birthdate, name, profImgUrl, userid, relationship) => {
    const newChild = await childRepo.createChild(gender,birthdate, name, profImgUrl, userid, relationship);
    const newAuth = await authService.createAuth(newChild.id, userid, relationship);
    return {newChild, newAuth};
}

//아이찾기
exports.verifyChild = async(id, userid) => {
    const child = await childRepo.verifyChild(id, userid);
    return child;
}

//회원의 모든 아이 찾기
exports.getAllChildrenByUser = async(auths) => {
    const children = await childRepo.getAllChildrenByUser(auths);
    return children;
}