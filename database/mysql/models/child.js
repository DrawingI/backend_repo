module.exports = (sequelize, DataTypes) => {
    const Child = sequelize.define('Child', {
        //예시 : 000000-0000000 (6자리-7자리)
        identityNo : {
            type: DataTypes.STRING,
            primaryKey : true,
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
        //아이 등록자
        userid : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        //아이 등록자와의 관계
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
            //아이를 등록한 회원을 db.User에서 찾을때 쓰이는 명칭
            as: 'registerer'
        });
        Child.hasMany(db.Auth, {
            foreignKey: 'identityNo',
            as: 'relationships'
        });
    }
    return Child;
}