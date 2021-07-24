// import important parts of sequelize library
const {
  Model,
  DataTypes
} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  id: {
    type: DataType.Integer,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataType.String,
  }, 
  price: {
    type: DataType.Decimal(10,2),
  },
  stock: {
    type: DataType.Integer,
  },
  category_id: {
    type: DataType.Integer,
    allowNull: true,
    references: {
      model: "category",
      key: "id",
    },
  },
},{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
});

module.exports = Product;