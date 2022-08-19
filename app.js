const mongoose = require('mongoose');
const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

const dburl = "mongodb://localhost:27017/tododb";
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req, res){
    res.render('home');
});

app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
});