const userRepo = require('../repo/mysql/userRepo');
const jwtService = require('./jwtService');

exports.createUser = async (username, email, password) => {
    const newUser = await userRepo.createUser(username, email, password);
    const token = await jwtService.loginToken(newUser);
    return {newUser, token};
}

exports.findUser = async(email, password) =>{
    const user = await userRepo.findUser(email, password);
    return user;
}

exports.findUserByEmail = async(email) => {
    const user = await userRepo.findUserByEmail(email);
    return user;
}