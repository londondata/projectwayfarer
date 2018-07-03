import Post from '../models/post';
import uuid from 'uuid';
import slug from 'limax';
import * as db from '../models';


function getPosts (req, res) {
  db.Post.find({}, function(err, posts) {
    if(err){console.log(err)
      res.sendStatus(500)}
    res.json(posts);
  });
}

function createPost(req, res) {
  // create an album based on request body and send it back as JSON
  db.Post.create(req.body, function(err, post) {
    if(err){res.sendStatus(500)}
    res.json(post);
  });
}

