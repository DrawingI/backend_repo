const db = require('../../database/mysql/models');

exports.createChild = async(identityNo, gender, name, profImgUrl, userid, relationship) => {
    const newChild = await db.Child.create({identityNo, gender, name, profImgUrl, userid, relationship});
    return newChild;
}