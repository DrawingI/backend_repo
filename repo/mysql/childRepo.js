const db = require('../../database/mysql/models');

exports.createChild = async(gender, name, profImgUrl, userid, relationship) => {
    const newChild = await db.Child.create({gender, name, profImgUrl, userid, relationship});
    return newChild;
}