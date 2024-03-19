import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/pic/home1.jpg"
import { Link } from "react-router-dom";

const TrendingDestinations = () => {
   
    return (
        <div className='mt-24 ms-36 mr-36 mb-36'>
            <SectionTitle
                heading={"Trending Destinations"}
                subHeading={"Explore our selection of the best places around the world"}
            ></SectionTitle>
            <div className=" grid lg:grid-cols-2 gap-8 ">

                <img src={img}className="rounded-lg   "  alt="" />
                <img src={img} className="rounded-lg " alt="" />
                <img src={img} className="rounded-lg " alt="" />
                <img src={img} className="rounded-lg " alt="" />

            </div>

        </div>
    );
};

export default TrendingDestinations;