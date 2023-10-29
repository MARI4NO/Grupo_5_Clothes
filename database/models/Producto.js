module.exports=(sequelize, DataTypes)=>{
    let cols={
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING(300),
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        city:{
            type: DataTypes.STRING(200),
            allowNull: false
        },
        place:{
            type: DataTypes.STRING(200),
            allowNull: false
        },
        adress:{
            type: DataTypes.STRING(250),
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        type:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        availables:{
            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    };
    let config={
        tableName: "products",
        timestamps: true
    }
    const Usuario=sequelize.define("Products", cols, config);
return Usuario;
}
