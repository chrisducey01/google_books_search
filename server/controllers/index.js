const router = require("express").Router();
const bookController = require("./book.controller.js");

router.use("/api/books", bookController);

module.exports = router;