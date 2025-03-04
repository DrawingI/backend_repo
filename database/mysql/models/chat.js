module.exports = (sequelize, DataTypes) => {
    const Diary = sequelize.define('Diary', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        childid: {
            type : DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'authorization',
                key: 'id',
            },
            onDelete: 'CASCADE',
        }
        
    },
    {
        tableName : 'chat',
        timestamps: false,
    }
);
    Chat.associate = (db) => {
        Chat.belongsTo(db.Child, {
            foreignKey: 'childid',
            targetKey: 'id',
        });
    }
    return Chat;
}