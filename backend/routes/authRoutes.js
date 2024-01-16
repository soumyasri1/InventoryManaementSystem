// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;
