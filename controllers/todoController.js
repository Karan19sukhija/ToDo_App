var bodyParser = require('body-parser');

// Below is the array storing the items which are getting input from the user
// var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'kick some coding ass' }];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');

//connect to the database

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user:Network@17@cluster0-mixs5.mongodb.net/<dbname>?retryWrites=true&w=majority',
{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true });

// creating a schema of the todo list database - which is like a blue print

var todoSchema = mongoose.Schema({
    item: String
});

// creating a model 

var Todo = mongoose.model('Todo',todoSchema);

//checking if the model works fine by creating a single item

/*var itemOne = Todo({item: 'Buy Flowers'}).save(function(err){
    if(err)throw err;
    console.log('item saved');
}); */

module.exports = function (app) {

    app.get('/todo', function (req, res) {

        //get data from MongoDB and pass it to the view

        Todo.find({},function(err,data){
            if (err) throw err;
            res.render('todo', { todos: data });
        });
        

    });

    // this is the handler for the AJAX post request is made ( check the public/todo-list.js file )
    app.post('/todo', urlencodedParser, function (req, res) {

         // get data from the view and post it on MongoDB
         var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data); // passing the updated data to the database 
         });

       // data.push(req.body);
       // res.json(data); // this will send the array as JSON to the AJAX request function ( within the public folder)
    });

    app.delete('/todo/:item', function (req, res) { // adding paramter because it was send from AJAX delete method
   
         // delete the requested item from mongoDB
         Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
             // we founded the data item in a way that it was comming with hyphens by the ajax
             //called method so we replaced - with space so that it can matched with the entry
             // in the mongoDB database

            if(err) throw err;
            res.json(data); // sending the updated data to the database
         });

         /*
        data = data.filter(function(todo){

            return todo.item.replace(/ /g,'-') !== req.params.item; 
            // if the above condition is false, then it will delete the selected item 
            // Note: Replace function is done for each item, just to match up with the selected item
        });
        res.json(data); // this is done to ensure that the request was successfully so that
        // the ajax call can further executes its steps.
        */
    });
}