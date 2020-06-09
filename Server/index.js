const path = require('path');
const express = require('../node_modules/express');
const db = require('../database/index.js');

const app = express();
const port = 3777;

app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('/allStories', (req, res) => {
  db.connection.query('SELECT latitude, longitude FROM stories', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/locationInfo', (req, res) => {
  res.send(200);
});

app.post('/storySubmit', (req, res) => {
  res.send(200);
});

app.listen(port);
console.log(`time to get weird on port ${port}`);
