const db = require('../database/mysql/models');

exports.createUser = async (req, res) => {
    try{
        const { usertype, username, useremail, userpassword } = req.body;
        const newUser = await db.User.create({ usertype, username, useremail, userpassword });
        res.status(201).json({message: '✅ User created successfully', user: newUser});
    }catch(error){
        res.status(500).json({message: '❌ Error creating user', error: error.message});
    }
};