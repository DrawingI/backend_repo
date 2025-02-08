module.exports = (sequelize, DataTypes) => {
    const ChildDiary = sequelize.define('ChildDiary', {
        
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authid : {
            type : DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'authentication',
                key: 'id',
            },
        },
        date : {
            type : DataTypes.DATE,
            allowNull: false,
        },
        body : {
            type: DataTypes.STRING,
        }
    },
    {
        tableName : 'childdiary',
        timestamps: true,
    }
);
    ChildDiary.associate = (db) => {
        ChildDiary.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        
    }
    return ChildDiary;
}