const { Op } = require('sequelize');
const db = require('../../database/mysql/models');
const argon2 = require('argon2');

exports.createUser = async (username, email, password) => {
    try {
        const hashedPassword = await argon2.hash(password); // 비밀번호 해싱
        const newUser = await db.User.create({
            username,
            email,
            password: hashedPassword
        });
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

exports.findUser = async(email, password) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: email
            }
        });

        if (!user) return null; // 사용자가 없으면 null 반환

        const isPasswordValid = await argon2.verify(user.password, password); // 비밀번호 검증
        return isPasswordValid ? user : null;
    } catch (error) {
        throw new Error('Error finding user: ' + error.message);
    }
};

exports.findUserByEmail = async(email) => {
    const user = await db.User.findOne({
        where: {
            email: email
        }
    });
    return user;
}

exports.findUsersToChat = async(auths) => {
    const users = await db.User.findAll({
        where: {
            id: {[Op.in]: auths.map(auth=> auth.userid)},
        }
    });
    return users;
}