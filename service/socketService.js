const users = new Map();

exports.addUserSocket = (email, socketid) => {
    users.set(email, socketid);
};

exports.removeUserSocket = (socketid) => {
    for(const[email, id] of users.entries()){
        if(id === socketid){
            users.delete(email);
            break;
        }
    }
};

exports.getUserSocket = async(email) =>{
    return users.get(email) || null;
}