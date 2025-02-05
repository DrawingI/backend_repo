const userRepo = require('../repo/mysql/userRepo');

exports.createUser = async (username, useremail, userpassword) => {
    const newUser = await userRepo.createUser(username, useremail, userpassword);
    return newUser;
}