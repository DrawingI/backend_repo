module.exports = (sequelize, DataTypes) => {
    const HtpRequest = sequelize.define('HtpRequest', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authid : {
            type: DataTypes.INTEGER,
            allowNull : false,
            references: {
                model: 'authorization',
                key: 'id',
            },
            onDelete : 'CASCADE',
        }
    }, {
        tableName: 'htpRequest',
        timestamps: true,
    });
    HtpRequest.associate = (db) => {
        HtpRequest.belongsTo(db.Auth, {
            foreignKey: 'authid',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
        HtpRequest.hasMany(db.HtpImage, {
            foreignKey: 'htpRequestId',
            sourceKey: 'id',
        });
    }
    return HtpRequest;
}