import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function SignUp() {
  const authCtx = useContext(AuthContext);

  const [username, setUsername] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: mail,
      password: password
    }

    await authCtx.signUp(payload);
  };

  return (
      <form
        className="flex flex-col w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-md sm:rounded-lg"
        onSubmit={handleSubmit}>
        <Link to="/">
          <h3 className="text-4xl pb-4 font-bold text-lime-800">Savor-chef</h3>
        </Link>
        <label className="block text-md font-medium text-gray-700 undefined">
          Username
        </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="block w-2/5 mt-1 border-gray-800 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></input>
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
