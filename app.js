var express = require('express');

var app = express();

var todoController = require('./controllers/todoController');

//setting up the view engine

app.set('view engine','ejs');

// Now making use of the middle 'app.use' to include static files such as style.css

//app.use('/assets',express.static('./public'));

// We are not using the above middle ware as it is route specific such as it only includes styling when
// we hit the url /assets, so make the styling for all the routes

app.use(express.static('./public'));

//fire the controller

todoController(app);

//listen to port
app.listen(3000);

console.log('You are listening on Port 3000');