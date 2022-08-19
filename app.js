const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const Todo = require('./models/todo');

const app = express();
const PORT = process.env.PORT || 3000;

//parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

//https://github.com/Automattic/mongoose/issues/1740#issuecomment-266772509
const dburl = "mongodb://root:pass@127.0.0.1:27017/tododb?authSource=admin";
try{
    mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('db connection success');
} catch(error){
    console.log('Error connection: ' + error);
}

app.get('/', function(req, res){
    res.render('home');
});

app.post('/', function(req, res){
    console.log(req.body);
    const todo = new Todo({
        todoItem: 'nvm'//req.body.input
    });
    todo.save(function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
});