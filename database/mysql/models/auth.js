module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define( 'Auth', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        identityNo : {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'children',
                key: 'identityNo',
            },
            onDelete: 'CASCADE',
        },
        userid : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key:'id',
            },
            onDelete: 'CASCADE',
        },
        relationship : {
            type: DataTypes.ENUM('caretaker','teacher'),
            allowNull: false,
        }
    },
    {
        tableName : 'authorization',
        indexes : [
            {
                unique: true,
                fields: ['userid', 'identityNo'],
            }
        ], 
        timestamps: false,
    }
);
    Auth.associate = (db) => {
        Auth.belongsTo(db.Child, {
            foreignKey : 'identityNo',
            targetKey : 'identityNo',
            onDelete: 'CASCADE',
        });
        Auth.belongsTo(db.User, {
            foreignKey : 'userid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        Auth.hasMany(db.HtpRequest, {
            foreignKey: 'authid',
            sourceKey: 'id',
        });
        Auth.hasMany( db.Diary, {
            foreignKey : 'authid',
            sourceKey: 'id',
        });
    }
    return Auth;
}