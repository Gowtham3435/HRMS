module.exports = {
  create: `INSERT INTO employees (organisation_id, name, email) VALUES (?,?,?)`,
  all: `SELECT * FROM employees WHERE organisation_id=?`,
  update: `UPDATE employees SET name=?, email=? WHERE id=? AND organisation_id=?`,
  delete: `DELETE FROM employees WHERE id=? AND organisation_id=?`
};
