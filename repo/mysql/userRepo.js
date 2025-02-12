const db = require('../../database/mysql/models');

exports.createUser = async (username, email, password) => {
    const newUser = await db.User.create({username, email, password});
    return newUser;
}

exports.findUser = async(email, password) => {
    const user = await db.User.findOne({
        where: {
            email: email,
            password: password,
        }
    });
    return user;
}

exports.findUserByEmail = async(email) => {
    const user = await db.User.findOne({
        where: {
            email: email
        }
    });
    return user;
}