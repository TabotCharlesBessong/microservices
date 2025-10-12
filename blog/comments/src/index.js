
const express = require('express');
const {randomBytes} = require('crypto');
require('dotenv').config();
const bodyParser = require('body-parser');

// Middleware
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

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

  res.status(201).send({ message: 'Comment created', comments });
});

app.listen(PORT, () => {
  console.log(`Comments service running on port ${PORT}`);
});
