import {useState} from "react"

const Login = () => { 
    
  const [username, setUsername] = useState("");
  const [password, setPassword]  = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  }



  return(
    <div>
      <label>
        username:
      <input type="text"  value={username} onChange={handleUsernameChange}/>
      </label>
      <label>
        password:
      <input type="password" value={password} onChange={handlePasswordChange}/>
      </label>
      <label>
        remeber me:
        <input type="checkbox" value={remember} onChange={handleRememberChange}/>
      </label>
      <label>
        <button onClick={handleSubmit}>Login</button>
      </label>


    </div>
  )
}
export default Login;