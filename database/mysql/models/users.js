module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            userid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            useremail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            userpassword: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );

    User.associate = (db) => {
        User.hasMany(db.Child, {
            foreignKey: 'userid', 
            //회원이 등록한 아이들을 db.Child에서 찾을때 쓰는 명칭
            as: 'registered_children'
        });
        User.hasMany(db.Auth, {
            foreignKey: 'userid',
            //회원이 서비스를 이용할 수 있는 아이들과의 관계를 찾을때 쓰는 명칭
            as: 'relationships'
        });
    }
    return User;
}


