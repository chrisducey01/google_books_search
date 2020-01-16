require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');;
const mongoose = require('mongoose');
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 8080;


// ===== Middleware ==== //
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => {
        console.log(err);
    })
    
// ==== if its production environment! //
if (process.env.NODE_ENV === "production") {
	console.log("Prod Mode Enabled")
	app.use(express.static("client/build"));
}

// ====== Routing & Controllers ====== //
app.use(routes);

// ====== React App ====== //
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// ==== Starting Server ===== //

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});
