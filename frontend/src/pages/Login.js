import './Login.css';
import { useState } from "react";
import { loginUser } from "../api";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {
    const res = await loginUser({email,password});
    localStorage.setItem("token", res.token);
    alert("Login Success");
  };

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={login}>Login</button>
    </div>
  );
}
