// Initiate the server
require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`congratulations, your server is running on port ${process.env.PORT}`);
});