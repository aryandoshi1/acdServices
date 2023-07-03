const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { STRING } = require("mysql/lib/protocol/constants/types");

require('dotenv').config();
const fs = require('fs');
const dotenv = require('dotenv');
const crypto = require('crypto');

const http = require('http');
//const newApp = require('./app');
const { hostname } = require("os");

const PORT = process.env.PORT;
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.use(express.static(__dirname));

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const url = process.env.MONGODB_URL;
const connectionURL = `mongodb+srv://${username}:${password}@${url}`;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

const notesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
});

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
})

app.post("/", function(req, res) {
    let newNote = new Note ({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newNote.save();
    res.redirect("/");
})

//app.listen(3000, function() {
  //  console.log("Server is running on port 3000");
//})

server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
})