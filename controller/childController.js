const childService = require('../service/childService');

//아이 등록하기기
exports.createChild = async(req, res) => {
    try{
        const { gender, name, profImgUrl, userid, relationship } = req.body;
        const {newChild, newAuth} = await childService.createChild(gender, name, profImgUrl, userid, relationship);
        res.status(201).json({message: '✅ Child and relationship with child created successfully', child: newChild, auth: newAuth});
    }catch(error){
        res.status(500).json({message: '❌ Error creating child', error: error.message});
    }
}

//아이 불러오기
