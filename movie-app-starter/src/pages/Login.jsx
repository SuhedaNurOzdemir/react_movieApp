import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn, singUpProvider, forgotPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    singIn(email, password);
  };
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[8vh] w-[380px] h-[500px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              className=" peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email address</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              className=" peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="flex justify-between">
            <span
              onClick={() => forgotPassword(email)}
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
            >
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
          <button className="btn-danger" type="submit">
            Login
          </button>
          <button
            className="flex justify-between text-center btn-danger"
            type="button"
            onClick={() => singUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
