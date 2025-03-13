const authService = require('../service/authService');
const chatService = require('../service/chatService');

//채팅방 생성하기 : name, childid를 받아서 회원이 아이와 auth가 존재하는지 확인 후 채팅방 생성
exports.createChat = async(req, res)=>{
    try{
        const {name, childid} = req.body;
        const auth = await authService.getOneAuthByIds(childid, req.user.id);
        if(!auth){
            return res.status(401).json({message : "❌Auth relationship must exist to create chat"});
        }
        const newChat = await chatService.createChat(name, auth.id);
        const newMember = await chatService.addMember(newChat.id, auth.id);
        
        return res.status(200).json({message : "✅ Successfully created new chat", chat: newChat, member: newMember});
    }catch(error){
        return res.status(500).json({message: "❌ Cannot create chatroom", error : error.message});
    }
}


