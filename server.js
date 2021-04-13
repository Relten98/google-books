// Import our dependancies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Port information
const PORT = process.env.PORT || 8080;

// Express, this is important to get this out of the way ASAP.
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// serves static on heroku
if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

// API route
app.use(routes);

// MongoDB connection
let MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost/googlebks";

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(PORT, () =>{
    console.log("Application is running at");
    // Because Clickable links are slick as hell, and also because I forger about NODEMON
    console.log(`http://localhost:${PORT}/`);
});