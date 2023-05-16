const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const review = {
        title: req.body.name,

    };

    // Save Tutorial in the database
    Review.create(review)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Review."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Review.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving reviews."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Review.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find REVIEW with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Review with id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Review.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "review was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Review with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Review.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete review with id=${id}. Maybe review was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete review with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Review.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Reviews were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all reviews."
            });
        });
};

