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
import useHomes from "../../../assets/hooks/useHome";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useWatches from "../../../assets/hooks/useWatches";

const Listing = () => {
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
      fetch("http://localhost:5000/watch", {
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
          <div className="text-sm breadcrumbs  ms-8">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Listing</li>
            </ul>
          </div>

          <h2 className="font-semibold text-4xl ms-8 mb-8">Listing---Homes</h2>
          {/* grid here between horizontal line and newsletter*/}
          <div className="grid sm:grid-cols-1 md:grid-cols-3  ">
            <div className="col-span-2 ">
              <hr className="  " />
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 mt-4 ">
                {/* homes photo grid in 2 col starts here */}
                {homes.map((home) => (
                  <div className=" bg-white rounded-lg sm:m-2" key={home._id}>
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
                ))}
              </div>
            </div>

            {/* most right column */}
            <div className=" ">
              <h2 className=" m-4 p-8 mt-0 bg-white text-center text-2xl font-semibold">
                Newsletter Sign Up!
              </h2>

              {/* right side image and info starts here */}
              <div className="ms-4 mr-4 p-4  bg-white">
                <h2 className=" text-xl font-semibold mb-4">Featured Items</h2>
                {featureHomes.map((home) => (
                  <div className="mb-4">
                    <div className="flex">
                      <img
                        className="w-1/2 rounded-lg"
                        src={home.image}
                        alt=""
                      />
                      <div className="ms-2 ">
                        <h2 className="font-semibold">{home.name}</h2>

                        {/* price and rating */}
                        <h2>{home.price} </h2>
                        {/* rating from mui */}

                        <Rating style={{ maxWidth: 180 }} value={2} />

                        <h2>
                          {" "}
                          2<BedroomParentOutlinedIcon /> 2
                          <BathroomOutlinedIcon /> 2<WcOutlinedIcon />
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* explore part */}
              <div className="ms-4 mr-4 p-4 bg-white mt-8">
                <h2 className="font-semibold text-xl mt-4">Explore</h2>
                {/* image and text  */}
                {trendingHomes.map((home) => (
                  <div className="mt-4" key={home._id}>
                    <img
                      src={home.image}
                      className="rounded-md h-36 w-full"
                      alt=""
                    />
                    <h2 className="-mt-8 text-center text-xl font-semibold">
                      {home.city}
                    </h2>
                  </div>
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
