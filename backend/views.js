const mongoose = require ('mongoose'),

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

//POSTS: create
app.post('/posts', (req, res) => {
  let newPost = req.body;

  newPost.create(newPost, (err, savedPost) => {
    if(err) { return console.log(err) }
    res.json(savedPost);
  });
});

//update
app.put('/posts/:id', (req, res) => {
  let postId = req.params.id;
  let updateBody = req.body;

  db.Post.findOneAndUpdate({ _id: postId }, updateBody, {new: true}, (err, updatedPost) => {
    iff(err) { return console.log(err)}
    res.json(updatedPost);
  });
});

//delete
app.delete('/posts/:id', (req, res) => {
  let postId = req.params.id;

  db.Post.findOneAndRemove({ _id: postId }, (err, deletedPost) => {
    res.json(deletedPost);
  });
});

// //get posts by city ((WORK IN PROGRESS AS OF FRIDAY EVE))
// app.get('/cities/:id/posts', (req, res) => {
//   let cityId = req.params.id;
//
//
// })
