const express = require('express');
const router = express.Router()

const { signUp, login } = require('./auth')

router.post('/sign-up', signUp)
router.post('/login', login)

module.exports = router