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
        res.status(201).json({message: '✅ Child and relationship with child created successfully', child: newChild, auth: newAuth});
    }catch(error){
        res.status(500).json({message: '❌ Error creating child', error: error.message});
    }
}

//아이 공유하기 : 아이 등록자인지 확인 후 토큰 발급
exports.createChildToken = async(req, res) => {
    try{
        const { id, userid } = req.body;
        if( !id || !userid){return res.status(400).json({message: 'no childid or userid'});}

        const child = await childService.verifyRegisterer(id, userid);
        if(!child){ return res.status(400).json({message: 'only registerer of child can generate token'});}
        
        const token = await jwtService.childToken(child);
        return res.status(200).json({message: "✅ success in creating token.", token: token});

    }catch(error){
        res.status(500).json({message: '❌ Error creating token for child', error: error.message});
    }
}

//아이 불러오기: 토큰이 유효한지 확인 후 auth 관계를 생성하지만 만약 존재하는 관계가 있다면 에러 메시지 반환.
exports.getChild = async(req, res) =>{
    const {token, relationship} = req.body;

    if(!token || !relationship){
        return res.status(400).json({message: "Required fields missing."});
    }

    try{
        const child = jwt.verify(token, process.env.ChILD_KEY);
        const auth = authService.createAuth(child.id, child.userid, relationship);
        
        if(!auth){ return res.status(400).json({message: "Already have access to this child."});}

        return res.status(200).json({message: "✅ successfully created authentication for this child", auth: auth});

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
