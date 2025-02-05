const db = require('../../database/mysql/models');

exports.createUser = async (username, useremail, userpassword) => {
    const newUser = await db.User.create({username, useremail, userpassword});
    return newUser;
}