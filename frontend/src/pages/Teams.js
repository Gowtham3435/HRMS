import { useState } from "react";
import { addTeam } from "../api";

export default function Teams() {
  const [name,setName] = useState("");
  const token = localStorage.getItem("token");

  const create = async () => {
    await addTeam({name}, token);
    alert("Team Created");
  };

  return (
    <div style={{padding:20}}>
      <h2>Teams</h2>
      <input placeholder="Team Name" onChange={e=>setName(e.target.value)} />
      <button onClick={create}>Create</button>
    </div>
  );
}
