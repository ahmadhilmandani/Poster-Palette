const md5 = require('md5')
const jwt = require('jsonwebtoken')
const ip = require('ip')

const { dbConnect } = require('../dbConnect')


const querySuccess = (res, rows = null, status = 200, message = "Ok") => {
  const data = {
    'status': status,
    'message': message
  }

  rows !== null ? data.data = rows : null
  res.status(200)
  res.json(data)
  res.end()
}

const queryError = (res, rows = null, status = 400, message = "Something went wront") => {
  const data = {
    'status': status,
    'message': message
  }

  rows !== null ? data.data = rows : null

  res.status(status)
  res.json(data)
  res.end()
}

const signUp = (req, res) => {
  const post = {
    email: req.body.email,
    password: md5(req.body.password),
    username: req.body.username,
    address: req.body.address
  }

  dbConnect.query(`INSERT INTO ?? (email, password, username, address) VALUES (?, ?, ?, ?)`, ["user", post.email, post.password, post.username, post.address], (err, rows, fields) => {
    if (err) {
      if (err.sqlState == '23000') {
        return queryError(res, null, 400, "Email telah terdaftar")
      }
      queryError(res)
    } else {
      querySuccess(res, rows)
    }
  })
}

const login = (req, res) => {
  const post = {
    email: req.body.email,
    password: md5(req.body.password)
  }

  dbConnect.query(`SELECT email, username, address FROM ?? WHERE ??=? AND ??=?`, ["user", "email", post.email, "password", post.password], (err, rows, field) => {
    if (err) {
      queryError(res)
    } else {
      querySuccess(res, rows)
    }
  })
}

module.exports = { signUp, login }