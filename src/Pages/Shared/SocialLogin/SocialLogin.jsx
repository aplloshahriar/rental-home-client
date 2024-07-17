import React, { useContext } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIN = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        // age: loggedUser.age,
      };
      fetch(
        `https://home-server-q5rf479n1-shahriars-projects-839da871.vercel.app/users`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log("from", from);
            navigate(from, { replace: true });
          }
          navigate("/");
        });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4 ">
        <button
          onClick={handleGoogleSignIN}
          className="btn btn-circle btn-outline mr-4"
        >
          <FaGoogle></FaGoogle>
        </button>
        {/* <button className="btn btn-circle btn-outline">
          <FaApple></FaApple>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
