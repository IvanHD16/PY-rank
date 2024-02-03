const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');

router.get('/users', userControllers.getAllUsers);
router.post('/users', userControllers.createUser);

// Rutas para controladores de posts
router.post('/posts', postControllers.createPost);
router.put('/posts/:postId/vote', postControllers.vote); 
router.put('/posts/:postId/comment', postControllers.addComment);
router.put('/posts/:postId/options', postControllers.addOptions);
router.delete('/posts/:postId', postControllers.deletePost);

// Define otras rutas según sea necesario

module.exports = router;
