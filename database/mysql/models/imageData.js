module.exports = (sequelize, DataTypes) => {
    const ImageData = sequelize.define('ImageData', {
        
        identityNo : {
            type: DataTypes.STRING,
            primaryKey : true,
        },
        htpRequestid : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        path : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        imagetype : {
            type: DataTypes.ENUM('Home', 'Tree', 'Person'),
            allowNull: false,
        },
       
        Date : {
            type: DataTypes.DATE,
            allowNull: false,
        }
    
        
    },
    {
        tableName : 'imagedata',
        timestamps: false,
    }
);
    ImageData.associate = (db) => {
        ImageData.belongsTo(db.HtpRequest, {
            foreignKey: 'id',
           
            as: 'requestid'
        });
       
    }
    return ImageData;
}