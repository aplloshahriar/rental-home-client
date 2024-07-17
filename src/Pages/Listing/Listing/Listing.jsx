import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../Shared/Header/Header";
import AutoComplete from "./CustomAutocomplete";
import CustomAutocomplete from "./CustomAutocomplete";
import Picker from "./Picker";
import {
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/pic/home1.jpg";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useHomes from "../../../assets/hooks/useHomes";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useWatches from "../../../assets/hooks/useWatches";

const Listing = ({ home }) => {
  const [homes] = useHomes();

  const [, refetch] = useWatches();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToWatch = (home) => {
    const {
      _id,
      name,
      category,
      city,
      price,
      address,
      image,
      bedrooms,
      bathrooms,
      guests,
      other,
      trending,
      comfort,
      review,
      featured,
    } = home;
    // console.log(home);
    // const item = {
    //   id: _id,
    //   name,
    //   category,
    //   city,
    //   price,
    //   address,
    //   image,
    //   bedrooms,
    //   bathrooms,
    //   guests,
    //   other,
    //   trending,
    //   comfort,
    //   review,
    //   featured,
    // };
    // console.log(item);

    if (user && user.email) {
      // const watchItem = {
      //   homeId: _id,
      //   name,
      //   image,
      //   price,
      //   email: user.email,
      // };
      // console.log(watchItem);
      const item = {
        id: _id,
        email: user.email,
        name,
        category,
        city,
        price,
        address,
        image,
        bedrooms,
        bathrooms,
        guests,
        other,
        trending,
        comfort,
        review,
        featured,
      };
      fetch("https://home-server-theta.vercel.app/watch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch(); // refetch watches to update the number of watch
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to watch list",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to add to watch",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // rating from mui
  // const [value, setValue] = React.useState(0);
  const featureHomes = homes.filter((home) => home.featured === "Featured");
  const trendingHomes = homes.filter((home) => home.trending === "Yes");

  return (
    <div className="">
      <Helmet>
        <title>Listing</title>
      </Helmet>

      {/* to avoid overlap nav */}
      <h2 className="bg-white p-8 "></h2>

      <div className=" md:grid grid-cols-3 ms-4   m-4 -mb-2 sm:mr-8 ">
        <CustomAutocomplete></CustomAutocomplete>
        <Picker></Picker>
        {/* todo square button */}
        <div>
          <div className="grid grid-cols-3 mt-4 lg:mr-2">
            <TextField id="outlined-search" label="Todo" type="search" />
            <button
              style={{ width: "50%", height: "55px", fontSize: "1rem" }}
              className="ms-12 btn btn-error text-white font-bold"
            >
              Sort
            </button>
            <button
              style={{ width: "70%", height: "55px", fontSize: "1rem" }}
              className="ms-0 btn btn-error text-white font-bold"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <section className="bg-slate-50">
        <div className=" mt-2 sm:mr-2 sm:ms-2 ms-8 mr-8 lg:ms-48 lg:mr-48">
          {/* breadcrumb from daisy ui */}
          <div className="text-sm breadcrumbs  lg:ms-8">
            <ul>
              <li>
                <Link className="text-rose-500" to="/">
                  Home
                </Link>
              </li>
              <li>Listing</li>
            </ul>
          </div>

          <h2 className="font-semibold text-4xl lg:ms-8 mb-8">
            Listing---Homes
          </h2>
          {/* grid here between horizontal line and newsletter*/}
          <div className="grid sm:grid-cols-1 md:grid-cols-3  ">
            <div className="col-span-3 ">
              <hr className="  " />
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 mt-4 ">
                {/* homes photo grid in 2 col starts here */}
                {homes.map((home) => (
                  <Link to={`/detailshomes/${home._id}`}>
                    <div className=" bg-white rounded-lg sm:m-2">
                      <img className=" rounded-t-lg w-full" src={img} alt="" />

                      {/* pricing and avatar */}
                      <div className="flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between  ">
                        <div className="">
                          <h1 className="text-3xl -mt-4  font-semibold w-full">
                            {home.price}
                          </h1>
                        </div>

                        {/* avatar here */}
                        <div className="-mt-4 mr-4">
                          <button
                            onClick={() => handleAddToWatch(home)}
                            className="btn btn-circle btn-outline"
                          >
                            <Avatar src="/broken-image.jpg" />
                          </button>
                        </div>
                      </div>

                      {/* other info like bed, bath, name,description */}
                      <div className="mt-8 ms-2">
                        <h2 className="text-lg font-semibold"> {home.name}</h2>
                        <h2 className="font-thin"> {home.address}</h2>
                        <h2>
                          <BedroomParentOutlinedIcon />
                          {home.bedrooms}
                          <BathroomOutlinedIcon />
                          {home.bathrooms}
                          <WcOutlinedIcon /> {home.guests} <br /> {home.other}
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
