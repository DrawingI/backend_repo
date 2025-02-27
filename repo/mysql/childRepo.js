const { Op } = require('sequelize');
const db = require('../../database/mysql/models');

exports.createChild = async(gender, birthdate, name, profImgUrl, userid, relationship) => {
    const newChild = await db.Child.create({gender, birthdate, name, profImgUrl, userid, relationship});
    return newChild;
}

exports.verifyChild = async(id, userid) =>{
    const child = await db.Child.findOne({
        where : {id, userid}
    });
    return child;
}

exports.getAllChildrenByUser= async(auths) => {
    const children = await db.Child.findAll({
        where : {
            id: {[Op.in]: auths.map(auth=> auth.childid)},
        }
    });
    return children;
}