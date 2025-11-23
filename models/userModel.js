module.exports = {
  createUser: `INSERT INTO users (organisation_id, name, email, password_hash) VALUES (?,?,?,?)`,
  getUserByEmail: `SELECT * FROM users WHERE email=?`
};
