module.exports=(sequelize, DataTypes)=>{
    let cols={
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    let config={
        tableName: "sales",
        timestamps: false
    }
    const Usuario=sequelize.define("Sales", cols, config);
return Usuario;
}
