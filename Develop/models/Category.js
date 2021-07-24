const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataType.integer,
      primaryKey: true,
      autoIncrement: true,
  },  
    catagory_name: {
      type: DataType.String,
      allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
