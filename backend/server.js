const app = express(),
      express = require('express'),
      http = require('http'),
      bodyparser = require('bodyparser'),
      cors = require('cors');
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
  res.sendFile('views/index.html' , { root : __dirname});
  // res.send("WAT");
});


// API ENDPOINTS

//get route for controllers
app.get('/api', controllers.api.index);
app.get('/api/users', controllers.users.index);
app.get('/api/posts', controllers.posts.index);
app.get('/api/cities', controllers.cities.index);

//post
app.post('/user', controller.user.index);
app.post('user/:id', controller.user.show);
app.post('/post', controller.post.index);
app.post('/post/:id', controller.post.show);
app.post('/city', controller.city.index);
app.post('/city/:id', controller.city.show);

//delete route for controllers
app.delete('/users/:id',




router(app);
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log('Server be listenin on', port);
