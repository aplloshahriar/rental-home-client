import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // react hook from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("logged", loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            age: data.age,
            gender: data.gender,
          };
          console.log("save", saveUser);
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            })
            .catch((error) => console.log(error)); // Added catch block to handle errors
          console.log("updated info");
        })
        .then((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      {/* to avoid overlap nav */}
      {/* <h2 className='bg-white p-8 '></h2> */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold ">Register now!</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              atque consequuntur nihil nulla laudantium nisi facilis officiis,
              neque voluptas rerum!
            </p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name </span>
                  <input
                    type="text"
                    {...register(
                      "name",
                      { pattern: /^[A-Za-z]+$/i },
                      { required: true, minLength: 4, maxLength: 20 }
                    )}
                    name="name"
                    placeholder="name"
                    className="input input-bordered "
                    required
                  />
                </label>

                {errors.name && (
                  <span className="text-red-600">
                    Please enter a valid name with 4 to 20 characters,
                    containing only letters
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                  <input
                    type="number"
                    {...register("age", { min: 18, max: 99 })}
                    name="age"
                    placeholder="Age"
                    className="input input-bordered"
                    required
                  />
                </label>

                {errors.age && (
                  <span className="text-red-600">Min age 18, max age 99</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                  <select
                    className="border-2"
                    {...register("gender")}
                    defaultValue=""
                    name="gender"
                    required
                  >
                    <option className="" value="" disabled hidden>
                      Select Gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </label>

                {errors.gender && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </label>

                {errors.age && (
                  <span className="text-red-600">Email required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </label>
                <a href="#" className="label-text-alt link link-hover ms-32">
                  Forgot password?
                </a>
                <label className="label"></label>
                {errors.password && (
                  <span className="text-red-600">
                    Min password 6 characters
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-error"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <h2 className="ms-4 mb-2 mt-0">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-amber-700">Login Here</span>
              </Link>
            </h2>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
