module.exports = (sequelize, DataTypes) => {
    const HtpImage = sequelize.define('HtpImage', {
        
        id : {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        htpRequestId : {
            type : DataTypes.INTEGER,
            allowNull: false,
            references : {
                model: 'htpRequest',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        path : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        imagetype : {
            type: DataTypes.ENUM('Home', 'Tree', 'Person'),
            allowNull: false,
        },
    },
    {
        tableName : 'htpImage',
        timestamps: true,
    }
);
    HtpImage.associate = (db) => {
        HtpImage.belongsTo(db.HtpRequest, {
            foreignKey: 'htpRequestId',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
    }
    
    return HtpImage;
}