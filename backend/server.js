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

app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.json({type: '*/*'}));
router(app);

//ROUTES

// HTML ENDPOINTS

app.get('/', function (req, res) {
  res.sendFile('test.html' , { root : __dirname});
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

//put route for controllers
  app.put('/posts/:id', controller.post.update);

}

router(app);
const server = http.createServer(app);
server.listen(process.env.PORT || 27017);
console.log('Server be listenin on http://localhost:27017');
