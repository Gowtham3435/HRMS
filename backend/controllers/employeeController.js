const db = require("../db");
const model = require("../models/employeeModel");

exports.create = (req,res)=>{
  const { name, email } = req.body;
  db.query(model.create, [req.user.organisation_id, name, email], ()=>{
    res.json({msg:"Employee added"});
  });
};

exports.all = (req,res)=>{
  db.query(model.all, [req.user.organisation_id], (err,rows)=>{
    res.json(rows);
  });
};
