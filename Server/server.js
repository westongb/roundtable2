const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RoundTable = require('./Models/Entryschema');
const nodmon = require('nodemon');
const cors = require('cors');
const storyschema = require('./Models/Storyschema');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://Westongb:Abc123890@mature-masculinity-nteci.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },{ useFindAndModify: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to Mongodb")

  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/get", function (req, res) {
    const docs = RoundTable.find({}, function (
      err, data) {
      if (err) {
        return res.json({ Message: 'this didnt work' })
      } else {
        res.json(data);
      }
    });
  });

  app.post('/post', function (req, res) {
    const NewEntry = new RoundTable({
      _id: mongoose.Types.ObjectId(),
      setDate: req.body.setDate,
      Journal: req.body.Journal
    })

    NewEntry.save().then(result => {
      console.log(result);
    })
      .catch(err => console.log(err));
    res.status(201).json({
      message: "Handling Post"
    })
  });

  app.put('/update/:id', (req, res) => RoundTable.findByIdAndUpdate(req.params.id, 
    {$set: req.body } ,
    (err,RoundTable) => {
      console.log(req.body)
      if(err) return (err);
      res.send('RoundTable Updated' + req.body)
    }
    ))

app.delete('/delete/:id', function (req, res) {
  RoundTable.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!' + err);
  })
});


})

mongoose.connect('mongodb+srv://Westongb:Abc123890@mature-masculinity-nteci.mongodb.net/story?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },{ useFindAndModify: false });

var storydb = mongoose.connection;
storydb.on('error', console.error.bind(console, 'connection error:'));
storydb.once('open', function () {
  console.log("Connected to Mongodb")

  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/story/get", function (req, res) {
    const docs = storyschema.find({}, function (
      err, data) {
      if (err) {
        return res.json({ Message: 'this didnt work' })
      } else {
        res.json(data);
      }
    });
  });

  app.post('/story', function (req, res) {
    const NewEntry = new storyschema({
      _id: mongoose.Types.ObjectId(),
      date: req.body.date,
      story: req.body.story
    })

    NewEntry.save().then(result => {
      console.log(result);
    })
      .catch(err => console.log(err));
    res.status(201).json({
      message: "Handling Post"
    })
  });

  app.put('/update/story/:id', (req, res) => storyschema.findByIdAndUpdate(req.params.id, 
    {$set: req.body } ,
    (err,storyschema) => {
      console.log(req.body)
      if(err) return (err);
      res.send('Story Updated' + req.body)
    }
    ))

// app.delete('/delete/story/:id', function (req, res) {
//   RoundTable.findByIdAndDelete(req.params.id, (err) => {
//     if (err) return next(err);
//     res.send('Deleted successfully!' + err);
//   })
// });


})

app.listen(port, () => console.log(`Listening on port ${port}`));

