import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://home-server-theta.vercel.app",
});

const useAxiosSecure = () => {
  //   const { logOut } = useContext(AuthContext);
  const { logOut } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("Access-Token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, axiosSecure, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
