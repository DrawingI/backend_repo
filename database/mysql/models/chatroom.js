module.exports = (sequelize, DataTypes) => {
    const Chatroom = sequelize.define('Chatroom', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'authorization',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }
    },
    {
        tableName : 'chatroom',
        timestamps: false,
        indexes:[
            {fields:['id'], unique: true},
        ]
    }
);
    Chatroom.associate = (db) => {
        Chatroom.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        Chatroom.hasMany(db.ChatroomMember, {
            foreignKey: 'chatroomid',
            sourceKey: 'id',
        })
    }
    return Chatroom;
}