const API = "http://localhost:5000";

export const registerOrg = (data) =>
  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json());

export const loginUser = (data) =>
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json());

export const getEmployees = (token) =>
  fetch(`${API}/employees`, {
    headers: { Authorization: token }
  }).then(res => res.json());

export const addEmployee = (data, token) =>
  fetch(`${API}/employees`, {
    method: "POST",
    headers: {"Content-Type": "application/json", Authorization: token},
    body: JSON.stringify(data)
  }).then(res => res.json());

export const addTeam = (data, token) =>
  fetch(`${API}/teams`, {
    method: "POST",
    headers: {"Content-Type": "application/json", Authorization: token},
    body: JSON.stringify(data)
  }).then(res => res.json());
