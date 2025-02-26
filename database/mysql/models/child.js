module.exports = (sequelize, DataTypes) => {
    const Child = sequelize.define('Child', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
        },
        birthdate : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender : {
            type : DataTypes.ENUM('female', 'male'),
            allowNull: false,
        },
        name : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        profImgUrl : {
            type: DataTypes.STRING,
        },
        //아이를 등록하는 회원의 id 
        userid : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key:'id',
            },
            onDelete: 'CASCADE',
        },
        //아이와 아이를 등록하는 회원의 관계 
        relationship : {
            type: DataTypes.ENUM('caretaker', 'teacher'),
            allowNull: false,
        }
    },
    {
        tableName : 'children',
        timestamps: false,
    }
);
    Child.associate = (db) => {
        Child.belongsTo(db.User, {
            foreignKey: 'userid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        Child.hasMany(db.Auth, {
            foreignKey: 'childid',
            sourceKey: 'id',
        });
    }
    return Child;
}