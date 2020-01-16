const db = require("../models");
const router = require("express").Router();
const API = require("../utils/googleBooksAPI");

//*********************************************
// Routes for /api/books (set in index.js)
//*********************************************

// base route - get all books
router.route("/").get((req, res) => {
    db.Book
        .find()
        .sort({ title: 1 })
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
});

// base route - post a new book
router.route("/").post((req, res) => {
    const { title, authors, image, link, description } = req.body;

    db.Book
        .create({ title, authors, image, link, description })
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
});


// delete a book by id
router.route("/:id").delete((req, res) => {
    const id = req.params.id;
    db.Book.findByIdAndRemove(id).then(dbModel=>{
        if(!dbModel) return res.status(404).json({message:"Book not found for given id.", _id:id})
        console.log("Book deleted");
        res.json(dbModel);
    })
})


// makes a call to google books api to search for book
// doing the call server side so API key can be hidden
// and makes app more flexible to be called not just from a browser
router.route("/search").post((req,res)=>{
    console.log("Search Route Hit")
    const {bookName} = req.query;
    API.search(bookName).then(searchRes=>{
        res.send(searchRes.data);
    })
});

module.exports = router;
