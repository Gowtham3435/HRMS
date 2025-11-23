module.exports = {
  assign: `INSERT INTO employee_teams (employee_id, team_id) VALUES (?,?)`,
  remove: `DELETE FROM employee_teams WHERE employee_id=? AND team_id=?`
};
