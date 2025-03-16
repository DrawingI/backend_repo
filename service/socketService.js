const users = new Map();

exports.addUserSocket = (userid, socketid) => {
    users.set(userid, socketid);
};

exports.removeUserSocket = (socketid) => {
    for(const[userid, id] of users.entries()){
        if(id === socketid){
            users.delete(userid);
            break;
        }
    }
};

exports.getUserSocket = async (userid) =>{
    return users.get(userid) || null;
}