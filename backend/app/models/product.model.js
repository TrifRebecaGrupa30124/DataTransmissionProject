module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    price: {
      type: Sequelize.NUMERIC
    },
    UnitInStock: {
      type: Sequelize.NUMERIC
    },
    ProductAvailable:{
      type:Sequelize.BOOLEAN
    },
    unitWeight: {
      type: Sequelize.NUMERIC
    },
    producer: {
      type: Sequelize.STRING
    },
    brand: {
      type: Sequelize.STRING
    },
    discount: {
      type: Sequelize.STRING
    },
    newPrice: {
      type: Sequelize.NUMERIC
    },
    summary: {
      type: Sequelize.STRING
    },
    shop: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },

  });

  return Product;
};
