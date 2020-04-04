require('dotenv').config({path:'../.env'});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RoundTable = require('./Models/Entryschema');
const nodmon = require('nodemon');
const cors = require('cors');
const storyschema = require('./Models/Storyschema');
var Schema = mongoose.Schema;
const app = express();
const port = process.env.PORT || 5000;
const Userschema = require('./Models/Userschema');
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb+srv://Westongb:Abc123890@mature-masculinity-nteci.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },{ useFindAndModify: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to Mongodb")
    
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/get", verifyToken, function (req, res) {
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
      user: req.body.user,
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

  app.put('/update/:id', verifyToken, (req, res) => RoundTable.findByIdAndUpdate(req.params.id, 
    {$set: req.body } ,
    (err,RoundTable) => {
      console.log(req.body)
      if(err) return (err);
      res.send('RoundTable Updated' + req.body)
    }
    ))

app.delete('/delete/:id', verifyToken, function (req, res) {
  RoundTable.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!' + err);
  })
});


app.delete('/story/delete/:id',verifyToken, function (req, res) {
  console.log(req.params.id)
  storyschema.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!' + err);
  })
});



  app.get("/story/get", verifyToken, function (req, res) {
    const docs = storyschema.find({}, function (
      err, data) {
      if (err) {
        return res.json({ Message: 'this didnt work' })
      } else {
        res.json(data);
      }
    });
  });

  app.post('/story', verifyToken, function (req, res) {
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

  app.put('/update/story/:id',verifyToken, (req, res) => storyschema.findByIdAndUpdate(req.params.id, 
    {$set: req.body } ,
    (err,storyschema) => {
      console.log(req.body)
      if(err) return (err);
      res.send('Story Updated' + req.body)
    }
    ))

    app.post('/UserInfo/new', async function (req, res) {
      const hashedPassword =  await bcrypt.hash(req.body.Password, 10);
      console.log(hashedPassword);
      const NewUser = new Userschema({
        _id: mongoose.Types.ObjectId(),
        firstName : req.body.FirstName,
        lastName: req.body.LastName,
        emailAddress: req.body.EmailAddress,
        userName: req.body.UserName,
        password: hashedPassword
      })
  
      NewUser.save().then(result => {
        console.log(result);
      })
        .catch(err => console.log(err));
      res.status(201).json({
        message: "Handling Post"
      })
    });


  //user authentication

app.post('/login/:userName', async(req, res, next) => {
  // console.log(req.params.userName)
  
  const errors = validationResult(req)
  
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      })
  }
  try {
  //find user   
  let user = await Userschema.find({"userName": req.params.userName}).exec(
       async  (err, user) => {
      if (!err) {
          //compare passwords using bcrypt
          console.log(user[0].password)
          await bcrypt.compare(req.body.password, user[0].password, function (err, result) {
              if (result === true) {
                 const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '36000s'})
                res.send({'TokenAuth': accessToken})
              } else {
                  res.send('Incorrect password');
      
              }});
      } else {
              console.log("didn't work")
      }
  })
  } catch (errors) {
      console.error(errors);
      res.status(500).json({
          message: "Server Error"
      })
  }
});  
   
//verify token

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(" ")[1]
 if (token == null) return res.sendStatus(401)

 jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if (err) return res.sendStatus(403)
     req.user = user
     next()
 })
}


// app.delete('/delete/story/:id', function (req, res) {
//   RoundTable.findByIdAndDelete(req.params.id, (err) => {
//     if (err) return next(err);
//     res.send('Deleted successfully!' + err);
//   })
// });
})

app.listen(port, () => console.log(`Listening on port ${port}`));

