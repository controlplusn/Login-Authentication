const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const testAuthModel = require('./models/testAuth');
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin12345@cluster0.jxxoj.mongodb.net/testAuth?retryWrites=true&w=majority");

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    testAuthModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success");
            } else {
                res.json("Incorrect password");
            }
        } else {
            res.json("Non existent user");
        }
    })
});


app.post('/signup', (req, res) => { 
    testAuthModel.create(req.body)
    .then(testAuth => res.json(testAuth))
    .catch(err => res.json(err));
});

app.listen(
    PORT,
    () => {console.log("server is running")}
);