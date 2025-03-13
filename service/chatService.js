const chatRepo = require('../repo/mysql/chatRepo');
const chatMemberRepo = require('../repo/mysql/chatMemberRepo');

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