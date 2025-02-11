const userService = require('../service/userService');

exports.createUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const {newUser, token} = await userService.createUser(username, email, password);
        res.status(201).json({message: '✅ User created successfully', user: newUser, token: token});
    }catch(error){
        res.status(500).json({message: '❌ Error creating user', error: error.message});
    }
}


