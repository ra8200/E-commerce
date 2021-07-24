// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: cascade,
});
// Categories have many Products
Category.belongsTo(Product, {
  foreignKey: "category_id",
  onDelete: cascade,
});
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: "product_id",
  onDelete: cascade,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  onDelete: cascade,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
