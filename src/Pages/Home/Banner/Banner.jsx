import React, { useEffect, useRef, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa6";
import img1 from "../../../assets/pic/wallpaperflare.com_wallpaper.jpg";
import Picker from "./Picker";

const Banner = () => {
  const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50%, -50%)",
  };

  const [popoverOpen, setPopoverOpen] = useState(false);
  // const [guestsInputFocused, setGuestsInputFocused] = useState(false);
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  // const [numPets, setNumPets] = useState(0);

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

  const places = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];

  return (
    <div className="container">
      <img className="w-full" src={img1} alt="" />
      <div style={centerStyle}>
        <h2 className="text-4xl ms-2 font-bold hidden lg:block">
          Book & Experience Amazing Places
        </h2>
        <p className="ms-24 mt-8 text-xl hidden lg:block">
          Lorem ipsum, dolor sit amet consectetur
        </p>

        <div className="hidden lg:flex block">
          <Autocomplete
            className="bg-white mt-4 mr-2 rounded"
            disablePortal
            id="combo-box-demo"
            options={places}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where to go?"
                sx={{
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "skyblue",
                    },
                }}
              />
            )}
          />

          <Picker />

          {/* guests */}
          <div className=" ms-2 relative mt-4">
            <TextField
              className="bg-white mt-4 mr-2 rounded"
              label="Guests"
              onFocus={() => setPopoverOpen(true)}
              value={`${numAdults} Adult${
                numAdults !== 1 ? "s" : ""
              }, ${numChildren} Child${numChildren !== 1 ? "ren" : ""}`}
              sx={{ width: 200 }}
            />

            {/* Popover for guests */}
            {popoverOpen && (
              <div
                className="absolute top-full bg-white rounded shadow-lg mt-1 p-2"
                ref={popoverRef}
              >
                <div className="grid grid-cols-4">
                  {/* Adults count */}
                  <h2 className="mt-2">{numAdults}</h2>
                  <h2 className="mt-2">Adult</h2>
                  <button
                    className="btn btn-circle"
                    onMouseDown={() => handleIncrement("adults")}
                  >
                    <FaPlus />
                  </button>
                  <button
                    className="btn btn-circle"
                    onMouseDown={() => handleDecrement("adults")}
                  >
                    <FaMinus />
                  </button>
                  {/* Children count */}
                  <h2 className="mt-2">{numChildren}</h2>
                  <h2 className="mt-2">Child</h2>
                  <button
                    className="btn btn-circle"
                    onMouseDown={() => handleIncrement("children")}
                  >
                    <FaPlus />
                  </button>
                  <button
                    className="btn btn-circle"
                    onMouseDown={() => handleDecrement("children")}
                  >
                    <FaMinus />
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
            style={{ width: "18%", height: "55px" }}
            className="btn btn-error text-white ms-2 mt-4"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
