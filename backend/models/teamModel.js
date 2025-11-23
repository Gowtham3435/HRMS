module.exports = {
  create: `INSERT INTO teams (organisation_id, name) VALUES (?,?)`,
  all: `SELECT * FROM teams WHERE organisation_id=?`
};
