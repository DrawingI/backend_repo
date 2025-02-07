module.exports = (sequelize, DataTypes) => {
    const ChildDiary = sequelize.define('ChildDiary', {
        
        identityNo : {
            type: DataTypes.STRING,
            primaryKey : true,
        },
        authid : {
            type : DataTypes.INTEGER,
            allowNull: false,
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
        tableName : 'childdairy',
        timestamps: true,
    }
);
    ChildDiary.associate = (db) => {
        ChildDiary.belongsTo(db.Auth, {
            foreignKey: 'authid',
            
            as: 'registerer'
        });
        
    }
    return ChildDiary;
}