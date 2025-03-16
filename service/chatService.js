const chatRepo = require('../repo/mysql/chatRepo');
const chatMemberRepo = require('../repo/mysql/chatMemberRepo');
const authService = require('../service/authService');

//채팅방 생성
exports.createChat = async(name, authid) => {
    const newChat = await chatRepo.createChat(name, authid);
    return newChat;
}

//채팅방에 여러 회원 더하기
exports.addMembers = async(chatid, auths) => {
    const newMembers = await chatMemberRepo.addMembers(chatid, auths);
    return newMembers;
}

//회원이 참여하고 있는 채팅방 권한들
exports.getChatsByAuths = async(auths) => {
    const memberChats = await chatMemberRepo.getChatsByAuths(auths);
    return memberChats;
}

//여러 채팅방 id들을 파라미터에 보내면 해당 채팅방들을 반환
exports.getChatsByChatids = async(chatids) => {
    const chats = await chatRepo.getChatsByChatids(chatids);
    return chats;
}

//채팅방에 참여하고 있는 모든 권한들을 반환
exports.getChatMembersByChatid = async(chatid) =>{
    const chatMembers = await chatMemberRepo.getChatMembersByChatid(chatid);
    return chatMembers;
}