import React from "react";
import img from "../../../assets/pic/home1.jpg";
import "./Comfort.css";

import useHomes from "../../../assets/hooks/useHomes";
const Comfort = () => {
  const [homes, loading, refetch] = useHomes();
  const comfortHomes = homes.filter((home) => home.featured === "Featured");

  console.log(homes);
  return (
    <div className="lg:m-72  md:m-36 ">
      <h2 className="text-center font-semibold text-4xl mb-8">
        {" "}
        Find a Place That Fits Your Comfort
      </h2>

      {/* custom css added here */}
      <div className="container">
        <div className="big">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
        <div className="horizontal">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
        <div className="horizontal">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
        <div className="big">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
        <div className="horizontal ">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
        <div className="horizontal ">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-white text-center text-xl font-semibold -mt-12 ">
            Apartment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
