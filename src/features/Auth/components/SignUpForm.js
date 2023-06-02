import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import SubmitButton from "../../../component/ui/buttons/SubmitButton";

function SignUpForm() {
  const authCtx = useContext(AuthContext);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: username,
      email: email,
      password: password,
    };

    try {
      await authCtx.signUp(payload);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Join Us
      </h1>
      <form className="space-y-4 md:space-y-6 pt-6">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 md:text-lg "
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Cool Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 md:text-lg "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="your_email@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 md:text-lg "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="123456"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center">
          <SubmitButton handleClick={handleSubmit}>Sign Up</SubmitButton>

          <p className="text-sm py-2.5 font-normal text-gray-500 ">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
