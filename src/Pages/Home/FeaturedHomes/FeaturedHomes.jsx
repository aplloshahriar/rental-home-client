import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination } from "swiper/modules";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import { Avatar } from "@mui/material";
import useHomes from "../../../assets/hooks/useHomes";
import { Link } from "react-router-dom";

const FeaturedHomes = () => {
  // Set data in state
  const [homes] = useHomes();
  const featureHomes = homes.filter((home) => home.featured === "Featured");
  console.log(homes);

  // Data load
  // useEffect(() => {
  //     fetch('homeList.json')
  //         .then(res => res.json())
  //         .then(data => {
  //             const featureHomes = data.filter(home => home.featured === "Featured");
  //             setHomes(featureHomes);
  //         });
  // }, []);

  return (
    <div className="">
      <div className="md:ms-36 md:mr-36 sm:mt-96 md:mt-48 lg:mt-24">
        <h2 className="font-semibold mt-8 text-4xl ms-4 ">
          Our Featured Homes
        </h2>
        <div className="flex justify-between mt-4 mb-4">
          <p className="ms-4 text-lg font-light ">
            Hand-picked selection of quality places
          </p>
          <Link to="/listing">
            <button className=" btn btn-outline mr-4 lg:mr-0 btn-error btn-sm lg:btn-md">
              See All
            </button>
          </Link>
        </div>

        {/* Conditionally render Swiper based on screen size */}
        <div className="hidden lg:block">
          {" "}
          {/* Hide Swiper on small and medium devices */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
          >
            {/* Map through homes and render SwiperSlide for each home */}
            {featureHomes.map((home) => (
              <SwiperSlide key={home._id}>
                <img src={home.image} alt={home.name} />
                {/* Render other content */}
                <div className="rounded-lg sm:m-2">
                  {/* Pricing and avatar */}
                  <div className="flex -mt-10 md:ms-2 md:mr-2 text-white justify-between md:justify-between">
                    <div>
                      <h1 className="text-3xl -mt-4 font-semibold w-full">
                        $600/night
                      </h1>
                    </div>
                    <div className="-mt-4 mr-4">
                      <Avatar src="/broken-image.jpg" />
                    </div>
                  </div>
                  {/* Other info like bed, bath, name, description */}
                  <div className="mt-8 ms-2">
                    <h2 className="text-lg font-semibold">{home.name}</h2>
                    <h2 className="font-thin">{home.address}</h2>
                    <h2>
                      <BedroomParentOutlinedIcon />2 Bedrooms{" "}
                      <BathroomOutlinedIcon />1 Baths
                      <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Render only images and other content for small and medium devices */}
        <div className="lg:hidden ">
          {homes.map((home) => (
            <div key={home._id} className="  rounded-lg sm:ms-2 mb-8">
              <img
                src={home.image}
                alt={home.name}
                className="mb-4 w-11/12 ms-2 rounded-md"
              />
              {/* Render other content */}
              <div className="rounded-lg sm:m-4  ">
                {/* Pricing and avatar */}
                <div className="flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between w-5/6">
                  <div className="">
                    <h1 className="text-3xl -mt-8 ms-4 font-semibold w-full ">
                      $600/night
                    </h1>
                  </div>
                  <div className="-mt-8 md:mr-4">
                    <Avatar src="/broken-image.jpg" />
                  </div>
                </div>
                {/* Other info like bed, bath, name, description */}
                <div className="mt-8 ms-2">
                  <h2 className="text-lg font-semibold">{home.name}</h2>
                  <h2 className="font-thin">{home.address}</h2>
                  <h2>
                    <BedroomParentOutlinedIcon />2 Bedrooms{" "}
                    <BathroomOutlinedIcon />1 Baths
                    <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomes;
