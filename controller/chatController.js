const authService = require('../service/authService');
const chatService = require('../service/chatService');
const userService = require('../service/userService');

//채팅에 참여할 수 있는 회원들 조회
exports.findUsersToChat = async(req, res) => {
    try{
        const { childid } = req.body;
        const auths = await authService.getAuthsByChildid(childid, req.user.id);
        if(!auths){
            return res.status(401).json({message: "No users found for chatting"});
        }
        const users = await userService.findUsersToChat(auths);
        return res.status(200).json({message: "✅ Found users available for chat", users});
    }catch(error){
        return res.status(500).json({message: "❌ Failed to find users for chatting", error: error.message});
    }
}


//채팅방 생성하기 : name, childid를 받아서 회원이 아이와 auth가 존재하는지 확인 후 채팅방 생성
exports.createChat = async(req, res)=>{
    try{
        const { name, childid, users } = req.body;
        const auth = await authService.getOneAuthByIds(childid, req.user.id);

        if(!auth){
            return res.status(401).json({message : "Auth relationship must exist to create chat"});
        }
        users.push(req.user);
        const auths = await authService.getAuthsOfUsers(users);
        const newChat = await chatService.createChat(name, auth.id);
        const newMembers = await chatService.addMembers(newChat.id, auths);
        
        return res.status(200).json({message : "✅ Successfully created new chat", chat: newChat, members: newMembers});
    }catch(error){
        return res.status(500).json({message: "❌ Cannot create chatroom", error : error.message});
    }
}



