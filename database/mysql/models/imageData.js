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
            type: DataTypes.Date,
            allowNull: false,
        }
    
        
    },
    {
        tableName : 'imagedata',
        timestamps: false,
    }
);
    Child.associate = (db) => {
        Child.belongsTo(db.User, {
            foreignKey: 'htpRequestid',
           
            as: 'requestid'
        });
       
    }
    return ImageData;
}