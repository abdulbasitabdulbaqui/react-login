import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h3>Login form</h3>
      <label>Email: </label>
      <input value={email} />
      <br />
      <br />
      <label>Password: </label>
      <input value={password}></input>
      <br />
      <br />
      <button>Login</button>
    </div>
  );
}

export default App;
