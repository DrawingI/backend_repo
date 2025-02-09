module.exports = (sequelize, DataTypes) => {
    const Diary = sequelize.define('Diary', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authid: {
            type : DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'authorization',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        share: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        tableName : 'diary',
        timestamps: false,
    }
);
    Diary.associate = (db) => {
        Diary.hasMany(db.DiaryContent, {
            foreignKey: 'diaryid',
            sourceKey: 'id',
        });
        Diary.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
    }
    return Diary;
}