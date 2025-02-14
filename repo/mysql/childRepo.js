const db = require('../../database/mysql/models');

exports.createChild = async(gender, name, profImgUrl, userid, relationship) => {
    const newChild = await db.Child.create({gender, name, profImgUrl, userid, relationship});
    return newChild;
}

exports.findChild = async(id, userid) =>{
    const child = await db.Child.findOne({
        where : {id, userid}
    });
    return child;
}