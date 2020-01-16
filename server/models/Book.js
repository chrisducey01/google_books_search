var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            type: String
        }
    ],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Note model
module.exports = Book;
