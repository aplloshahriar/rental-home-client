import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa6";

import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaBath, FaBed, FaHome } from "react-icons/fa";
import { FaBahtSign, FaBatteryEmpty, FaBatteryHalf } from "react-icons/fa6";
// import Picker from "../Home/Banner/Picker";

import { DatePicker, Space } from "antd";
// import { CalendarOutlined } from '@ant-design/icons';
import moment from "moment";
import useAxiosSecure from "../../assets/hooks/useAxiosSecure";
import Swal from "sweetalert2";
// moment from npm install moment

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  // Disable dates before today
  return current && current < moment().startOf("day");
};

const DetailsHomes = () => {
  const data = useLoaderData();

  console.log(data);

  const [arrivalDate, setArrivalDate] = useState(0);
  const [departureDate, setDepartureDate] = useState(0);
  const [popoverOpen, setPopoverOpen] = useState(false);
  // const [guestsInputFocused, setGuestsInputFocused] = useState(false);
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  // const [numPets, setNumPets] = useState(0);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const handleBooking = () => {
    const bookingDates = [];

    // Convert UTC timestamps to moment objects
    const arrivalMoment = moment(arrivalDate);
    const departureMoment = moment(departureDate);

    // Loop through each date between arrival and departure dates
    let currentDate = arrivalMoment.clone(); // Start from the arrival date
    while (currentDate.isSameOrBefore(departureMoment)) {
      // Format the current date to "yyyy/mm/dd" and push it to the bookingDates array
      bookingDates.push(currentDate.format("YYYY/MM/DD"));

      // Move to the next date
      currentDate.add(1, "day");
    }

    const bookingData = {
      arrivalDate: arrivalMoment.format("YYYY/MM/DD"),
      departureDate: departureMoment.format("YYYY/MM/DD"),
      numAdults: numAdults,
      numChildren: numChildren,
    };

    // Send bookingData to the server using the secure instance of Axios
    axiosSecure
      .post("/bookings", bookingData)
      .then((response) => {
        // Handle success response from the server
        console.log("Booking successful:", response.data);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Confirm it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Booked!",
              text: "You successfully booked home",
              icon: "success",
            });
          }
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error booking:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          navigate("/login");
        }
      });
  };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      // Convert dates to UTC timestamps
      const arrivalTimestamp = dates[0].startOf("day").valueOf(); // Start of the day to avoid timezone issues
      const departureTimestamp = dates[1].startOf("day").valueOf();

      // Store UTC timestamps in state
      setArrivalDate(arrivalTimestamp);
      setDepartureDate(departureTimestamp);
    }
  };

  // Function to handle incrementing the number of adults or children
  const handleIncrement = (type) => {
    switch (type) {
      case "adults":
        setNumAdults(numAdults + 1);
        break;
      case "children":
        setNumChildren(numChildren + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "adults":
        if (numAdults > 0) {
          setNumAdults(numAdults - 1);
        }
        break;
      case "children":
        if (numChildren > 0) {
          setNumChildren(numChildren - 1);
        }
        break;
      default:
        break;
    }
  };

  // const handleBlur = () => {
  //   setTimeout(() => {
  //     setGuestsInputFocused(false);
  //   }, 0);
  // };

  // Function to handle applying changes and closing popover
  const handleApply = (event) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    setPopoverOpen(false);
  };

  // Ref to the popover div
  const popoverRef = useRef();

  // Effect to handle clicks outside of the popover to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* to avoid overlap nav */}
      {/* <h2 className="bg-white p-8 "></h2> */}

      <img className="  w-full h-96 " src={data.image} alt="" />
      <div className=" mb-24">
        {/* bredcrumbs */}
        <div className="text-sm breadcrumbs ms-2  lg:ms-24 mt-8 ">
          <ul>
            <li>
              <Link className="text-rose-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-rose-500" to="/listing">
                Listing
              </Link>
            </li>
            <li>{data.name}</li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-3 m-2 lg:ms-24 lg:mr-24 mt-4  ">
          {/* details col */}
          <div className="grid col-span-2">
            <h2 className="font-semibold text-2xl lg:text-4xl ">{data.name}</h2>
            <h2 className="font-light  mb-8">{data.address}</h2>
            <hr />
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mb-8">
              <div className=" mt-2">
                <FaHome className="ms-8 text-xl"></FaHome>
                <h2 className="font-semibold ">{data.name}</h2>
              </div>
              <div>
                <WcOutlinedIcon className="ms-8"></WcOutlinedIcon>
                <h2 className="font-semibold">{data.guests}</h2>
              </div>
              <div>
                <BedroomParentOutlinedIcon className="ms-8"></BedroomParentOutlinedIcon>
                <h2 className="font-semibold">{data.bedrooms}</h2>
              </div>
              <div>
                <BathroomOutlinedIcon className="ms-8"></BathroomOutlinedIcon>
                <h2 className="font-semibold">{data.bathrooms}</h2>
              </div>
            </div>
            <hr />
            <div className="mt-8">
              <h2 className="font-semibold">About This Listing</h2>
              <h2 className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt iste est magni ipsum nisi voluptatem hic modi earum
                deleniti veniam?
              </h2>
            </div>
          </div>

          {/* price col */}
          <div className="mt-4 lg:mt-0 lg:ms-4">
            <h2 className=" font-semibold p-2 bg-black text-white rounded-md text-center text-lg lg:text-xl">
              ${data.price}
            </h2>
            <div className="lg:ms-16">
              {/* <Picker></Picker> */}

              {/* picker */}
              <Space direction="vertical" size={12}>
                <RangePicker
                  style={{ width: "100%", height: "55px" }}
                  className="mt-4"
                  placeholder={["Arrival", "Departure"]}
                  disabledDate={disabledDate}
                  onChange={handleDateChange}
                />
              </Space>

              {/* guest field */}
              <div className="  relative mt-4">
                <TextField
                  className="bg-white mt-4 mr-2 rounded"
                  label="Guests"
                  onFocus={() => setPopoverOpen(true)}
                  value={`${numAdults} Adult${
                    numAdults !== 1 ? "s" : ""
                  }, ${numChildren} Child${numChildren !== 1 ? "ren" : ""}`}
                  sx={{
                    width: 288,
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "skyblue",
                      },
                  }}
                />

                {/* Popover for guests */}
                {popoverOpen && (
                  <div
                    className="absolute top-full bg-white rounded shadow-lg mt-1 p-2"
                    ref={popoverRef}
                  >
                    <div className="grid grid-cols-4 gap-2">
                      {/* Adults count */}
                      <h2 className="mt-2">{numAdults}</h2>
                      <h2 className="mt-2">Adult</h2>
                      <button
                        className="btn btn-circle "
                        onMouseDown={() => handleIncrement("adults")}
                      >
                        <FaPlus className="text-blue-400" />
                      </button>
                      <button
                        className="btn btn-circle"
                        onMouseDown={() => handleDecrement("adults")}
                      >
                        <FaMinus className="text-blue-400" />
                      </button>
                      {/* Children count */}
                      <h2 className="mt-2">{numChildren}</h2>
                      <h2 className="mt-2">Child</h2>
                      <button
                        className="btn btn-circle "
                        onMouseDown={() => handleIncrement("children")}
                      >
                        <FaPlus className="text-blue-400" />
                      </button>
                      <button
                        className="btn btn-circle "
                        onMouseDown={() => handleDecrement("children")}
                      >
                        <FaMinus className="text-blue-400" />
                      </button>
                    </div>
                    <button
                      className="btn btn-outline btn-error btn-sm justify-end mt-2"
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={handleBooking}
                className="w-4/5 h-2 btn btn-outline btn-error btn-md  text-white mt-3 "
              >
                Instant Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHomes;
