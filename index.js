const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const Path = require('path');
app.use(morgan('dev'));
app.use(cors());
// iske jaga hum static folder bana ke usme apne css, js, images rakh sakte hai aur usko serve kar sakte hai
app.use(express.static(Path.join(__dirname, 'public')));    
// view engine setup
app.set('view engine', 'ejs');

// parsing data
// jub data aayegi to usko json me convert karne ke liye
app.use(express.json());
// form data ko urlencoded me convert karne ke liye
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res) => {
    res.render("index");
})
app.get('/profile/:username', (req,res) => {
    res.send(`<h1>welcome ${req.params.username}</h1>`);
})
// multiple params
app.get('/author/:username/:age', (req,res) => {
    res.send(`<h1>welcome ${req.params.username} of a age is ${req.params.age}</h1>`);
})
app.listen(5000, () => {
    console.log("server is running on port 5000");
})
