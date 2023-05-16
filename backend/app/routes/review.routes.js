const reviews = require("../controllers/review.controller.js");
module.exports = app => {
    const products = require("../controllers/review.controller.js");

    let router = require("express").Router();

    // Create a new product
    router.post("/", reviews.create);

    // Retrieve all products
    router.get("/", reviews.findAll);

    // Retrieve all published products
    // router.get("/published", reviews.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", reviews.findOne);

    // Update a Tutorial with id
    router.put("/:id", reviews.update);

    // Delete a Tutorial with id
    router.delete("/:id", reviews.delete);

    // Delete all products
    router.delete("/", reviews.deleteAll);

    app.use("/api/reviews", router);
};
