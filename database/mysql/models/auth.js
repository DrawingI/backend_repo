module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define( 'Auth', {
        identityNo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        userid : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        relationship : {
            type: DataTypes.ENUM('caretaker','teacher'),
            allowNull: false,
        }
    },
    {
        tableName : 'authentication',
        //복합키 설정
        indexes: [
            {
                unique: true,
                fields: ['identityNo', 'userid']
            }
        ],
        timestamps: false
    }
);
    Auth.associate = (db) => {
        Auth.belongsTo(db.Child, {
            foreignKey : 'identityNo',
            //아이를 찾을때 쓰는 명칭
            as : 'children_in_relation_to_user'
        });
        Auth.belongsTo(db.User, {
            foreignKey : 'userid',
            //회원을 찾을때 쓰는 명칭칭
            as : 'user_in_relation_to_child'
        });
    }
    return Auth;
}