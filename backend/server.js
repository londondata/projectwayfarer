const express = require('express'),
      app = express(),
      http = require('http'),
      bodyparser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      router = require('router'),
      morgan = require('morgan');

const db = require(`./models`);
const controllers = require('./controllers');

mongoose.connect('mongodb://localhost/27017');
// mongoose.Promise = global.Promise;
const server = http.createServer(app);

app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.json({type: '*/*'}));
app.use(express.static('public'));

//ROUTES
// router(app);

// HTML ENDPOINTS

app.get('/', function (req, res) {
  res.sendFile('test.html' , { root : __dirname});
});

// API ENDPOINTS

console.log(controllers.users.index)

//get route for controllers
// module.exports = function(app) {
  // app.get('/api', controllers.api.index);
  app.get('/users', controllers.users.index);
  app.get('/posts', controllers.posts.index);
  app.get('/cities', controllers.cities.index);

//get route for show controllers
  app.get('/posts/:id', controllers.posts.show);
  app.get('/cities/:id', controllers.cities.show);
  app.get('users/:id', controllers.users.show);

// get post routes
  app.post('/users', controllers.users.create);
  app.post('/posts', controllers.posts.create);
  app.post('/cities', controllers.cities.create);

//delete route for controllers
  // app.delete('/users/:id', controllers.users.delete);
  // app.delete('/posts/:id', controllers.posts.delete);
  // app.delete('/cities/:id', controllers.cities.delete);

//put route for controllers
  // app.put('/posts/:id', controllers.posts.update);

// }

module.exports = app;

const port = process.env.PORT || 8080
server.listen(port);
console.log(`Server be listenin on ${port}`);
