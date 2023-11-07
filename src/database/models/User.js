module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };
    const User = sequelize.define("Users", cols, config);
    User.associate = function (models) {
        User.belongsTo(models.Sales, {
            as: "sales",
            foreignKey: "user_id",
        });
    };
    return User;
};
