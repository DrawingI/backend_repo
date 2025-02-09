const db = require('../../database/mysql/models');

exports.createUser = async (username, email, password) => {
    const newUser = await db.User.create({username, email, password});
    return newUser;
}