const chatRepo = require('../repo/mysql/chatRepo');
const chatMemberRepo = require('../repo/mysql/chatMemberRepo');

//채팅방 생성
exports.createChat = async(name, authid) => {
    const newChat = await chatRepo.createChat(name, authid);
    return newChat;
}

//채팅 참여 회원 더하기
exports.addMember = async(chatid, authid) => {
    const newMember = await chatMemberRepo.addMember(chatid, authid);
    return newMember;
}