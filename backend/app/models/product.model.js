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
    }

  });

  return Product;
};
