module.exports = (sequelize, DataTypes) => {
    const ImageData = sequelize.define('ImageData', {
        
        id : {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        htpRequestId : {
            type : DataTypes.INTEGER,
            allowNull: false,
            references : {
                model: 'htpRequests',
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
        tableName : 'imageData',
        timestamps: true,
    }
);
    ImageData.associate = (db) => {
        ImageData.belongsTo(db.HtpRequest, {
            foreignKey: 'htpRequestId',
            targetKey: 'id',
            onDelete: 'CASCADE',
        });
    }
    
    return ImageData;
}