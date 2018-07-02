const mongoose = require ('mongoose'),
import User from '../models';

// // get all users
// app.get('/users', (req, res) => {
//     db.User.find({}, (err, allUsers) => {
//       if(err) { return console.log(err) }
//       res.json({ users: allUsers })
//     });
// });


//USERS: create
app.post('/users', (req, res) => {
  let newUser = req.body;

  newUser.create(newUser, (err, savedUser) => {
    if(err) { return console.log(err) }
    res.json(savedUser);
  });
});

// get user by ID
app.get('/users/:id', (req, res) => {
  let userId = req.params.id;

  db.User.findOne({ _id: userId }, (err, foundUser) => {
    if(err) { return console.log(err) }
    res.json(foundUser);
  });
});


//delete
app.delete('/users/:id', (req, res) => {
  let userId = req.params.id;

  db.User.findOneAndRemove({ _id: userId }, (err, deletedUser) => {
    res.json(deletedUser);
  });
});
