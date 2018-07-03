const express     = require('express'),
      http        = require('http'),
      bodyparser  = require('body-parser'),
      morgan      = require('morgan'),
      app         = express(),
      router      = require('./router'),
      mongoose    = require('mongoose'),
      cors        = require('cors');

mongoose.connect('mongodb://localhost:auth/auth'),

app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.json({type: '*/*'}));

router(app);
const server = http.createServer(app);
server.listen(process.env.PORT || 3090);
console.log('Server listening on:', port);

