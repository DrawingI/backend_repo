const childRepo = require('../repo/mysql/childRepo');
const authService = require('./authService');

//아이등록
exports.createChild = async(gender, birthdate, name, profImgUrl, userid, relationship) => {
    const newChild = await childRepo.createChild(gender, birthdate, name, profImgUrl, userid, relationship);
    const newAuth = await authService.createAuth(newChild.id, userid, relationship);
    return {newChild, newAuth};
}

//해당 회원이 해당 아이를 등록했는지 확인
exports.verifyChild = async(id, userid) => {
    const child = await childRepo.verifyChild(id, userid);
    return child;
}

//회원의 모든 아이 찾기
exports.getAllChildrenByUser = async(auths) => {
    const children = await childRepo.getAllChildrenByUser(auths);
    return children;
}

//아이 삭제하기
exports.deleteChild = async(id) => {
    const childDeleted = await childRepo.deleteChild(id);
    return childDeleted;
}