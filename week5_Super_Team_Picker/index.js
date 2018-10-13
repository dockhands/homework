const express = require('express');
const app = express();

app.get('/hello-world', function (req, res) {
    res.send('Hello, World!');
  });

  const DOMAIN = 'localhost';
const PORT = '5050';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});