// routes/posts.js
const router = require('express').Router();
const { listPosts } = require('../controllers/postController');

router.get('/', listPosts);

module.exports = router;
