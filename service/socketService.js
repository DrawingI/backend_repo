const users = new Map();

exports.addUserSocket = (token, socketid) => {
    users.set(token, socketid);
};

exports.removeUserSocket = (socketid) => {
    for(const[token, id] of users.entries()){
        if(id === socketid){
            users.delete(token);
            break;
        }
    }
};

exports.getUserSocket = async (token) =>{
    return users.get(token) || null;
}