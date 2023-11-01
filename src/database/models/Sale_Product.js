module.exports=(sequelize, DataTypes)=>{
    let cols={
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sale_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cant:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config={
        tableName: "sales_products",
        timestamps: false
    }
    const Sale_Product=sequelize.define("Sales_Products", cols, config);
    Sale_Product.associate= function(models){
        Sale_Product.hasMany(models.Products, {
            as: "products",
            foreignKey: "product_id"
        })
    }
    Sale_Product.associate= function(models){
        Sale_Product.hasMany(models.Sales, {
            as: "sales",
            foreignKey: "sale_id"
        })
    }
return Sale_Product;
}
