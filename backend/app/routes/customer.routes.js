const customers = require("../controllers/customer.controller.js");
module.exports = app => {
    const products = require("../controllers/customer.controller.js");

    let router = require("express").Router();

    // Create a new product
    router.post("/", customers.create);

    // Retrieve all products
    router.get("/", customers.findAll);

    // Retrieve all published products
   // router.get("/published", customers.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", customers.findOne);

    // Update a Tutorial with id
    router.put("/:id", customers.update);

    // Delete a Tutorial with id
    router.delete("/:id", customers.delete);

    // Delete all products
    router.delete("/", customers.deleteAll);

    app.use("/api/customers", router);
};
