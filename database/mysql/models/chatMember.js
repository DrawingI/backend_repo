module.exports = (sequelize, DataTypes) => {
    const ChatMember = sequelize.define('ChatMember', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chatid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'chat',
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
        tableName : 'chatMember',
        timestamps: false,
    }
);
    ChatMember.associate = (db) => {
        ChatMember.belongsTo(db.Chat, {
            foreignKey: 'chatid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        ChatMember.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey:'id',
            onDelete: 'CASCADE',
        })
    }
    return ChatMember;
}