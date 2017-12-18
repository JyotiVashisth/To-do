var express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) =>
  res.send('Hello World!')
)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/addlist',function(req, res) {
    
          var mongoose = require("mongoose");
mongoose.connect("mongodb://sample:sample@ds159856.mlab.com:59856/tasks");
 
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
     console.log("Connection succeeded.");
});
 
var Schema = mongoose.Schema;
 
var TaskSchema = new Schema({
    TaskName: String,
    Taskdate: String,
 });

 var T = mongoose.model("TaskList", TaskSchema);
 
 var todo = new T({
     TaskName: "zubi",
     Taskdate: "whaterver",
});
 
 todo.save(function(error) {
     console.log("Your bee has been saved!");
 if (error) {
     console.error(error);
  }
 });


res.send('saved!!');
});


app.post('/removelist',function(req, res) {
    
          var mongoose = require("mongoose");
mongoose.connect("mongodb://sample:sample@ds159856.mlab.com:59856/tasks");
 
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
     console.log("Connection succeeded.");
});
 
var Schema = mongoose.Schema;
db.collection('tasks', {}, function(err, task) {
        task.remove({key:value }, function(err, result) {
            if (err) {
                console.log(err);
            }
            console.log(result);
            db.close();
        });
    });

res.send('deleted!!');
});



// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});


