import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import img from '../../assets/image/login.webp'

const Login = () => {
  const { loginUser, loginInWithGoogle, loginInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    loginInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(navigateTo, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const githubSignIn = () => {
    loginInWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(navigateTo, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(navigateTo, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
        <div className="text-center lg:text-left">
          <img src={img} alt=''></img>
        </div>
        <div className="card flex-shrink-0 rounded-xl w-full max-w-sm shadow-2xl bg-base-100">
        
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-5xl font-bold text-center my-5">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-lg shadow-lg btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-center flex-col">
            <button className="btn justify-center mx-auto rounded-lg" onClick={googleSignIn}><FaGoogle className="mr-3"></FaGoogle>Google</button>
            <p className="text-center my-5">
              Not have an account? <Link className="text-orange-600 text-xl font-bold" to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
