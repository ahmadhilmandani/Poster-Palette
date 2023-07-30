const express = require('express');
const router = express.Router()

const { signUp } = require('./auth')

router.post('/sign-up', signUp)

module.exports = router