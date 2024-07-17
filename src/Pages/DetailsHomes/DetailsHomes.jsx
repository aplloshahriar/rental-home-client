import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import { DatePicker, Space } from "antd";
import moment from "moment";
import useAxiosSecure from "../../assets/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import GuestsField from "./GuestsField"; // Import GuestsField component

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  return current && current < moment().startOf("day");
};

const DetailsHomes = () => {
  const data = useLoaderData();

  console.log(data);

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(data.price);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const calculateTotalPrice = (arrival, departure) => {
    if (!arrival || !departure) {
      return data.price;
    }
    // Calculate the number of nights
    const days = departure.diff(arrival, "days");
    return (days * data.price).toFixed(1);
  };

  const handleBooking = () => {
    if (!arrivalDate || !departureDate) {
      Swal.fire({
        title: "Missing Dates",
        text: "Please select arrival and departure dates",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    if (numAdults + numChildren <= 0) {
      Swal.fire({
        title: "No Guests Selected",
        text: "Please select at least 1 adult or child",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const arrivalMoment = moment(arrivalDate);
    const departureMoment = moment(departureDate);
    const totalPrice = calculateTotalPrice(arrivalMoment, departureMoment);

    const bookingData = {
      arrivalDate: arrivalMoment.format("YYYY/MM/DD"),
      departureDate: departureMoment.format("YYYY/MM/DD"),
      numAdults: numAdults,
      numChildren: numChildren,
      totalPrice: totalPrice,
    };

    axiosSecure
      .post("/bookings", bookingData)
      .then((response) => {
        Swal.fire({
          title: "Confirm Booking",
          text: `Are you sure you want to confirm this booking for ${totalPrice}?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Confirm it!",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Booking Confirmed!",
              text: `You have successfully booked the home for $${totalPrice}.`,
              icon: "success",
              confirmButtonText: "Great!",
              confirmButtonColor: "#3085d6",
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error booking:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          navigate("/login");
        } else {
          Swal.fire({
            title: "Booking Failed",
            text: "There was an error processing your booking. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#d33",
          });
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

  return (
    <div>
      <img className="w-full h-96" src={data.image} alt="" />
      <div className="mb-24">
        <div className="text-sm breadcrumbs ms-2 lg:ms-24 mt-8">
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
        <div className="grid lg:grid-cols-3 m-2 lg:ms-24 lg:mr-24 mt-4">
          <div className="grid col-span-2">
            <h2 className="font-semibold text-2xl lg:text-4xl">{data.name}</h2>
            <h2 className="font-light mb-8">{data.address}</h2>
            <hr />
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mb-8">
              <div className="mt-2">
                <FaHome className="ms-8 text-xl"></FaHome>
                <h2 className="font-semibold">{data.name}</h2>
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
          <div className="mt-4 lg:mt-0 lg:ms-4">
            <h2 className="font-semibold p-2 bg-black text-white rounded-md text-center text-lg lg:text-xl">
              ${totalPrice}
            </h2>
            <div className="lg:ms-16">
              <Space direction="vertical" size={12}>
                <RangePicker
                  style={{ width: "100%", height: "55px" }}
                  className="mt-4"
                  placeholder={["Arrival", "Departure"]}
                  disabledDate={disabledDate}
                  onChange={handleDateChange}
                />
              </Space>
              <GuestsField
                numAdults={numAdults}
                setNumAdults={setNumAdults}
                numChildren={numChildren}
                setNumChildren={setNumChildren}
              />
              <button
                onClick={handleBooking}
                className="w-4/5 h-2 btn btn-outline btn-error btn-md text-white mt-3"
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
