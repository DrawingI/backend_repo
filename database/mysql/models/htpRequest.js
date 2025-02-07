module.exports = (sequelize, DataTypes) => {
    const HtpRequest = sequelize.define('HtpRequest', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authid : {
            type: DataTypes.INTEGER,
            allowNull : false
        }
    }, {
        tableName: 'htpRequests',
        timestamps: false
    });
    HtpRequest.associate = (db) => {
        HtpRequest.belongsTo(db.Auth, {
            foreignKey: 'authid',
            //아이와의 관계에서 생성된 권한을 통한 검사 요청
            as: 'htp_request_from_user_about_child'
        })
    }
    return HtpRequest;
}