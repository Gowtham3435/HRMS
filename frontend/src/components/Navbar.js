export default function Navbar() {
  return (
    <div style={{padding:20, background:"#eee"}}>
      <a href="/">Login</a> | 
      <a href="/register" style={{marginLeft:10}}>Register</a> | 
      <a href="/employees" style={{marginLeft:10}}>Employees</a> |
      <a href="/teams" style={{marginLeft:10}}>Teams</a>
    </div>
  );
}
