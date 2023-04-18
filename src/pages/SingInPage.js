import { useContext, useState } from "react";
import { json } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function SignIn({setToken}) {
    const authCtx = useContext(AuthContext)
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await authCtx.signIn(mail, password);
    }

    return (
      <div>
        <h1>Please Sign In</h1>
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

export default SignIn;