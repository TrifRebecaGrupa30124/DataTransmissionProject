module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        name: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        job: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.NUMERIC
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.NUMERIC
        },

    });

    return Customer;
};
