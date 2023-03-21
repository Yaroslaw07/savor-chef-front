import { useContext, useState } from "react";
import { json } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";


function Login({setToken}) {
    const authCtx = useContext(AuthContext)
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await authCtx.login(mail,password);
    }

    return (
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input type="text" onChange={e => setMail(e.target.value)}></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}></input>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default Login;