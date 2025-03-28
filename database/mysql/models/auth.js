module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define( 'Auth', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        childid : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'children',
                key: 'id',
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
            type: DataTypes.ENUM('caretaker','teacher', '보호자', '선생님'),
            allowNull: false,
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        }
    },
    {
        tableName : 'authorization',
        indexes : [
            {
                unique: true,
                fields: ['userid', 'childid'],
            }
        ], 
        timestamps: false,
    }
);
    Auth.associate = (db) => {
        Auth.belongsTo(db.Child, {
            foreignKey : 'childid',
            targetKey : 'id',
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
        Auth.hasMany(db.Chat, {
            foreignKey: 'authid',
            sourceKey:'id',
        });
        Auth.hasMany(db.ChatMember, {
            foreignKey: 'authid',
            sourceKey:'id',
        })
    }
    return Auth;
}