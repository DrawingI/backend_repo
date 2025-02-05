module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            userid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            usertype: {
                type: DataTypes.STRING,
                allowNull: false,
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
            tableName: 'users'
        }
    );
    User.associate = (models) => {
            //User.hasMany(models.User);
    }
    return User;
}


