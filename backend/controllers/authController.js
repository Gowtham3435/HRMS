const db = require('../db'); // your MySQL connection

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error saving user' });
    }
    res.send({ message: 'User registered successfully', userId: result.insertId });
  });
};
