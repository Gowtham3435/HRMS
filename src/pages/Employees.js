import { useState, useEffect } from "react";
import { getEmployees, addEmployee } from "../api";

export default function Employees() {
  const [list,setList] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const token = localStorage.getItem("token");

  const load = async () => {
    const res = await getEmployees(token);
    setList(res);
  };

  const add = async () => {
    await addEmployee({name,email}, token);
    load();
  };

  useEffect(()=>{ load(); },[]);

  return (
    <div style={{padding:20}}>
      <h2>Employees</h2>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {list.map(e=>(
          <li key={e.id}>{e.name} - {e.email}</li>
        ))}
      </ul>
    </div>
  );
}
