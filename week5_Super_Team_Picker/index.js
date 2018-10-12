const express = require('express');
const app = express();

app.get('/hello-world', function (req, res) {
    res.send('Hello, World!');
  });