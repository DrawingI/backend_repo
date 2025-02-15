const childService = require('../service/childService');
const authService = require('../service/authService');
const jwtService = require('../service/jwtService');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//아이 등록하기
exports.createChild = async(req, res) => {
    try{
        const { gender, name, profImgUrl, userid, relationship } = req.body;
        const {newChild, newAuth} = await childService.createChild(gender, name, profImgUrl, userid, relationship);
        return res.status(201).json({message: '✅ Child and relationship with child created successfully', child: newChild, auth: newAuth});
    }catch(error){
        return res.status(500).json({message: '❌ Error creating child', error: error.message});
    }
}

//아이 공유하기 : 아이 등록자인지 확인 후 토큰 발급
exports.createChildToken = async(req, res) => {
    try{
        const id = req.body;
        const child = await childService.verifyChild(id, req.user.id);

        if(!child){ return res.status(400).json({message: 'only registerer of child can generate token'});}
        
        const token = await jwtService.childToken(child);
        return res.status(200).json({message: "✅ success in creating token.", token: token});

    }catch(error){
        res.status(500).json({message: '❌ Error creating token for child', error: error.message});
    }
}

//아이 불러오기: 토큰의 유효한지 확인 후 auth 관계를 생성. 
exports.getChildByToken = async(req, res) =>{
    const {token, relationship} = req.body;

    if(!token || !relationship){
        return res.status(400).json({message: "Required fields missing."});
    }

    try{
        const child = jwt.verify(token, process.env.CHILD_KEY);
        const authExist = await authService.getOneAuthByIds(child.id, req.user.id);

        if(authExist){
            return res.status(400).json({message: "Already have access to this child."});
        }
        
        const newAuth = await authService.createAuth(child.id, req.user.id, relationship);
        return res.status(200).json({message: "✅ successfully created authorization for this child", auth: newAuth});

    }catch(error){
        
        if(error.name === "TokenExpiredError"){
            return res.status(419).json({
                messsage: " ❌ Expired Token."
            });
        }
        
        if(error.name === "JsonWebTokenError"){
            return res.status(401).json({
                message: "❌ Invalid Token."
            });
        }
        
        return res.status(500).json({message: "❌ Error creating authentication for this child", error: error.message});
    }
}

//회원이 관리하는 아이 불러오기
exports.getAllChildrenByUser = async(req, res) =>{
    try{
        const auths = await authService.getAuthsByUserid(req.user.id);
        const children = await childService.getAllChildrenByUser(auths);
    
        return res.status(200).json({
            message: "✅ children returned",
            children,
        });

    }catch(error){
        return res.status(500).json({
            message: "❌ Error bringing children managed by :", 
            user: req.user.username,
        });
    }
}