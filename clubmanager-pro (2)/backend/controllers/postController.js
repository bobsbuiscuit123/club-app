// controllers/postController.js
const Post = require('../models/Post');

async function listPosts(req, res) {
  res.json(await Post.find().sort({ createdAt: -1 }));
}

module.exports = { listPosts };
