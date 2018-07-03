<<<<<<< HEAD
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/wayfarer');

// module.exports.User = require('.models/user.js')
// module.exports.City = require('.models/city.js')
// module.exports.Post = require('.models/post.js')

// bodyParser.urlEncoded

// const port
// server.listen(port);

// router(app);

=======
>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7
const express = require('express'),
      app = express(),
      http = require('http'),
      bodyparser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      router = require('router');

const db = require(`./models`);
const controllers = require('./controllers');

mongoose.connect('mongodb://localhost:27017');

app.use(cors());
app.use(bodyparser.json({type: '*/*'}));


//ROUTES

// HTML ENDPOINTS

app.get('/', function (req, res) {
  res.sendFile('test.html' , { root : __dirname});
  // res.send("WAT");
});

// API ENDPOINTS

//get route for controllers
module.exports = function(app) {
  app.get('/api', controllers.api.index);
  app.get('/api/users', controllers.users.index);
  app.get('/api/posts', controllers.posts.index);
  app.get('/api/cities', controllers.cities.index);

//post route for controllers
app.post('/user', controller.user.index);
app.post('user/:id', controller.user.show);
app.post('/post', controller.post.index);
app.post('/post/:id', controller.post.show);
app.post('/city', controller.city.index);
app.post('/city/:id', controller.city.show);

//delete route for controllers
app.delete('/user/:id', controller.user.delete);
app.delete('/post/:id', controller.post.delete);

}

router(app);
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log('Server be listenin on http://localhost:3000');
