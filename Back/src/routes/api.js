const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
// Define otras rutas según sea necesario

module.exports = router;