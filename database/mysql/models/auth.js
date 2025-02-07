module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define( 'Auth', {
        authid : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
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
        indexes : [
            {
                unique: true,
                fields: ['userid', 'identityNo']
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