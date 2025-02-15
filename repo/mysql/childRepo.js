const db = require('../../database/mysql/models');

exports.createChild = async(gender, name, profImgUrl, userid, relationship) => {
    const newChild = await db.Child.create({gender, name, profImgUrl, userid, relationship});
    return newChild;
}

exports.verifyChild = async(id, userid) =>{
    const child = await db.Child.findOne({
        where : {id, userid}
    });
    return child;
}

exports.getChildById= async(id) => {
    const child = await db.Child.findOne({
        where : {id}
    });
    return child;
}