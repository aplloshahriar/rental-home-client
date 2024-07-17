import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa6";

const GuestsField = ({
  numAdults,
  numChildren,
  setNumAdults,
  setNumChildren,
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef();

  const handleIncrement = (type) => {
    if (type === "adults") {
      setNumAdults((prev) => prev + 1);
    } else if (type === "children") {
      setNumChildren((prev) => prev + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && numAdults > 0) {
      setNumAdults((prev) => prev - 1);
    } else if (type === "children" && numChildren > 0) {
      setNumChildren((prev) => prev - 1);
    }
  };

  const handleApply = (event) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    setPopoverOpen(false);
  };

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
    <div className="relative mt-4">
      <TextField
        className="bg-white mt-4 mr-2 rounded"
        label="Guests"
        onFocus={() => setPopoverOpen(true)}
        value={`${numAdults} Adult${
          numAdults !== 1 ? "s" : ""
        }, ${numChildren} Child${numChildren !== 1 ? "ren" : ""}`}
        sx={{
          width: 288,
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
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
              className="btn btn-circle"
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
              className="btn btn-circle"
              onMouseDown={() => handleIncrement("children")}
            >
              <FaPlus className="text-blue-400" />
            </button>
            <button
              className="btn btn-circle"
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
  );
};

export default GuestsField;
