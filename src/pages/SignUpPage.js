import { useState,useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function SignUp() {

    const authCtx = useContext(AuthContext)

    const [username,setUsername] = useState();
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await authCtx.signUp(username,mail, password);
    };


    return (
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setMail(e.target.value)}></input>
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div></div>
      </form>
    );
}

export default SignUp;