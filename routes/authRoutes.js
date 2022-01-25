const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const { register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,} = require('../controller/authcontroller');

router.post('/register',register)
router.post('/login',login)
router.get('/logout', authenticateUser, logout);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;