import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
    });
    Swal.fire({
      title: "User Login Successfully",
      showClass: {
        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
      },
      hideClass: {
        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
      },
    });
    navigate(from, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold ">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi{" "}
            </p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Login" />
              </div>
            </form>
            <h2 className="ms-4 mb-2 mt-0">
              New Here?{" "}
              <Link to="/register">
                <span className="text-amber-700">Create an Account</span>
              </Link>
            </h2>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
