module.exports = (sequelize, DataTypes) => {
    const DiaryContent = sequelize.define('DiaryContent', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        diaryid : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references: {
                model: 'diary',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        body : {
            type: DataTypes.STRING,
            allowNull : false,
        },
    },
    {
        tableName : 'diaryContent',
        timestamps : true,
    }
);
    DiaryContent.associate = (db) => {
        DiaryContent.belongsTo(db.Diary, {
            foreignKey: 'diaryid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
    }
    return DiaryContent;
}