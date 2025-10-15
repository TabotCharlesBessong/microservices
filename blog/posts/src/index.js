const express = require('express');
const {randomBytes} = require('crypto');
require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

// Middleware
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const posts = {}

app.use(bodyParser.json());
app.use(cors());


app.get('/posts', (req, res) => {
  // res.send([
  //   { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  //   { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  // ]);
  // get all posts
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  // Logic to create a new post would go here
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;

  posts[id] = { id, title };

  await axios.post('http://localhost:2376/events', { type: 'PostCreated',
    data: { id, title }
  }).catch((err) => {
    console.log(err.message);
  });
  
  res.status(201).send({ message: 'Post created' ,posts});
});

app.post('/events', (req, res) => {
  console.log('Received Event:', req.body.type);

  res.send({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Posts service running on port ${PORT}`);
});