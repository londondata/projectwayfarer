const controller = require('./controllers')

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let router = new Router()

app.use(bodyParser.urlencoded({extended: true}));

import * as PostController from './controllers/postController.js'
router.route('/posts').get(postController.getPosts)


let port = process.env.PORT || 5000;
app.listen(port, process.env.IP, function(){
  console.log(" has started!");
})


console.log(`listening on ${port}`)


module.exports = function(app) {
  app.get('/user', controller.user.index);
  app.get('/user/:id', controller.user.show);
  app.get('/post', controller.post.index);
  app.post('/post', controller.post.create);
  app.get('/post/:id', controller.post.show);
  app.get('/city', controller.city.index );
  app.post('/city', controller.city.create);
  app.get('/city/:id', controller.city.show);
}
