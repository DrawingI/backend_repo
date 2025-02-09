const userRepo = require('../repo/mysql/userRepo');

exports.createUser = async (username, email, password) => {
    const newUser = await userRepo.createUser(username, email, password);
    return newUser;
}