const userService = require('../service/userService');
const jwtService = require('../service/jwtService');

exports.login = async(req, res) => {
    const {email, password} = req.body;

    const user = await userService.findUser(email, password);

    if(!user){
        return res.status(401).json({message: "Invalid credentials", user: user});
    }

    const token = await jwtService.loginToken(user);

    return res.status(200).json({message: "Token created", token: token});
}