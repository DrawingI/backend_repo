const userRepo = require('../repo/mysql/userRepo');
const jwtService = require('./jwtService');

exports.createUser = async (username, email, password) => {
    const newUser = await userRepo.createUser(username, email, password);
    const token = await jwtService.loginToken(newUser);
    return {newUser, token};
}

//로그인 할때 사용
exports.findUser = async(email, password) =>{
    const user = await userRepo.findUser(email, password);
    return user;
}

//로그인 이후에 email 만으로 user를 찾을 수 있는 기능
exports.findUserByEmail = async(email) => {
    const user = await userRepo.findUserByEmail(email);
    return user;
}