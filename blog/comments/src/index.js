
const express = require('express');
const {randomBytes} = require('crypto');
require('dotenv').config();
const bodyParser = require('body-parser');

// Middleware
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  axios.post('http://localhost:2376/events', { type: 'CommentCreated',
    data: {
      id: commentId, content, postId: req.params.id
    }
  }).catch((err) => {
    console.log(err.message);
  });

  res.status(201).send({ message: 'Comment created', comments });
});

// fetch all comments
app.get('/comments', (req, res) => {
  res.send(commentsByPostId);
});

app.post('/events', (req, res) => {
  console.log('Received Event:', req.body.type);

  res.send({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Comments service running on port ${PORT}`);
});
