const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, async () => {
  console.log('Listening on 3000');
});
