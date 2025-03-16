module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        
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
        tableName : 'chat',
        timestamps: false,
        indexes:[
            {fields:['id'], unique: true},
        ]
    }
);
    Chat.associate = (db) => {
        Chat.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        Chat.hasMany(db.ChatMember, {
            foreignKey: 'chatid',
            sourceKey: 'id',
        })
    }
    return Chat;
}