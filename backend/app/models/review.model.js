module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        review: {
            type: Sequelize.STRING
        },
        rate: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },

    });

    return Review;
};
