const app = express(),
      express = require('express'),
      http = require('http'),
      bodyparser = require('bodyparser'),
      cors = require('cors');
      mongoose = require('mongoose'),
      router = require('router');

const db = require(`./models`);

mongoose.connect('mongodb://localhost:27017');

app.use(cors());
app.use(bodyparser.json({type: '*/*'}));

router(app);
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log('Server be listenin on', port);
