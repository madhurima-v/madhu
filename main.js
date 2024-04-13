import express from 'express'


import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.use(express.static(__dirname+'\\public'))

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.get('/login', function(req, res){
    res.render('login.ejs')
})

app.get('/register', function(req, res){
    res.render('register.ejs')
})

app.get('/reset', function (req,res){
    res.render('reset.ejs')
})

app.get('/contact', function (req,res){
    res.render('contact.ejs')
})

app.listen(8080, function (req, res) {
    console.log("Server started")
})