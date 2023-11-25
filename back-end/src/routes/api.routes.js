const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Sample routes
router.post('/users', UserController.createUser);
// Add other routes here

module.exports = router;
