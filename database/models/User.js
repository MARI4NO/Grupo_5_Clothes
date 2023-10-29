module.exports=(sequelize, DataTypes)=>{
    let cols={
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    let config={
        tableName: "users",
        timestamps: false
    }
    const Usuario=sequelize.define("Users", cols, config);
return Usuario;
}
