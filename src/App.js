import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(email)
    console.log(password)
  };

  return (
    <div>
      <h3>Login form</h3>
      <label>Email: </label>
      <input type="text" value={email} onChange={onEmailChange} />
      <br />
      <br />
      <label>Password: </label>
      <input type="text" value={password} onChange={onPasswordChange}></input>
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
