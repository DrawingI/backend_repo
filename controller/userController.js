const userService = require('../service/userService');

exports.createUser = async (req, res) => {
    try{
        const { username, useremail, userpassword } = req.body;
        const newUser = await userService.createUser(username, useremail,userpassword);
        res.status(201).json({message: '✅ User created successfully', user: newUser});
    }catch(error){
        res.status(500).json({message: '❌ Error creating user', error: error.message});
    }
}