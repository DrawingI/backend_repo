const authService = require('../service/authService');
const chatService = require('../service/chatService');
const userService = require('../service/userService');

//채팅에 참여할 수 있는 회원들 조회 (나 자신 미포함)
exports.findUsersToChat = async(req, res) => {
    try{
        const { childid } = req.body;
        const auths = await authService.getOtherAuthsByChildid(childid, req.user.id);
        if(!auths){
            return res.status(401).json({message: "No users found for chatting"});
        }
        const userids= await userService.findUsersToChat(auths);
        return res.status(200).json({message: "✅ Found users available for chat", userids});
    }catch(error){
        return res.status(500).json({message: "❌ Failed to find users for chatting", error: error.message});
    }
}


//채팅방 생성하기 : 회원이 아이와의 auth가 있는지 확인, 채팅 멤버 선택해서 채팅에 참여시키기
exports.createChat = async(req, res)=>{
    try{
        const { name, childid, userids } = req.body;
        const auth = await authService.getOneAuthByIds(childid, req.user.id);

        if(!auth){
            return res.status(401).json({message : "Auth relationship must exist to create chat"});
        }
        userids.push({id : req.user.id});
        const auths = await authService.getSomeAuthsByChildid(childid, userids);
        const newChat = await chatService.createChat(name, auth.id);
        const newMembers = await chatService.addMembers(newChat.id, auths);
        
        return res.status(200).json({message : "✅ Successfully created new chat", chat: newChat, members: newMembers});
    }catch(error){
        return res.status(500).json({message: "❌ Cannot create chatroom", error : error.message});
    }
}

//회원의 모든 채팅방 불러오기
exports.findChats = async(req, res) => {
    try{
        const auths = await authService.getAuthsByUserid(req.user.id);
        const memberChats = await chatService.getChatsByAuths(auths);

        if(!memberChats){
            return res.status(401).json({message: "No chats exist"});
        }

        const chatids = memberChats.map(memberChat => memberChat.chatid);
        const chats = await chatService.getChatsByChatids(chatids);

        return res.status(200).json({message: "✅ Chats successfully brought", chats});

    }catch(error){
        return res.status(500).json({message: "❌ Cannot bring chats for user", error: error.message});
    }
}

//채팅에 참여하고 있는 회원들 불러오기
exports.findChatMembers = async(req, res) => {
    const { chatid } = req.body;
    const chatMembers = await chatService.findChatMembers(chatid);
    

}



