const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RoundTable =require('./Models/Entryschema');
const nodmon = require('nodemon');
const cors = require('cors')
// const mongodb = context.services.get("mongodb-atlas");
// const JournalEntry = mongodb.db("mature-masculinity").collection("RoundTable");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://Westongb:Abc123890@mature-masculinity-nteci.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { 
  console.log("Connected to Mongodb")

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/get" , function(req, res){
  const docs =  RoundTable.find({},function(
    err,data) {
    if (err) {
      return res.json({Message:'this didnt work'})
    } else {
    res.json(data);
    }
  });
});

app.post('/post', function(req,res){
  const NewEntry= new RoundTable({
    _id: mongoose.Types.ObjectId(),
   setDate: req.body.setDate,
  Journal: req.body.Journal
  })

  NewEntry.save().then(result=>{
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling Post"
  })
})
});

app.delete('/:id/delete', function (req, res) {
  RoundTable.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
}
);

app.listen(port, () => console.log(`Listening on port ${port}`));

