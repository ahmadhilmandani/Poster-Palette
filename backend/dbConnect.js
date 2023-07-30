const mysql = require('mysql')

const dbConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'poster_palette',
})

dbConnect.connect((err) => {
  if (err) {
    throw err
  }
  else {
    console.log("mySQL is connected")
  }
})

module.exports = { dbConnect }