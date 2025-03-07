module.exports = (sequelize, DataTypes) => {
    const ChatroomMember = sequelize.define('ChatroomMember', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chatroomid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'chatroom',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        authid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'authorization',
                key:'id',
            },
            onDelete: 'CASCADE',
        }
    },
    {
        tableName : 'chatroomMember',
        timestamps: false,
    }
);
    ChatroomMember.associate = (db) => {
        ChatroomMember.belongsTo(db.Chatroom, {
            foreignKey: 'chatroomid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        ChatroomMember.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey:'id',
            onDelete: 'CASCADE',
        })
    }
    return ChatroomMember;
}