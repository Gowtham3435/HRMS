const db = require("../db");
const model = require("../models/teamModel");
const et = require("../models/employeeTeamModel");

exports.create = (req,res)=>{
  const { name } = req.body;
  db.query(model.create, [req.user.organisation_id, name], ()=>{
    res.json({msg:"Team added"});
  });
};

exports.assign = (req,res)=>{
  const { employee_id, team_id } = req.body;
  db.query(et.assign, [employee_id, team_id], ()=>{
    res.json({msg:"Assigned"});
  });
};
