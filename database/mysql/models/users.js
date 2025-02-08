module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
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
            sourceKey: 'id',
        });
        User.hasMany(db.Auth, {
            foreignKey: 'userid',
            sourceKey: 'id',
        });
    }
    return User;
}


