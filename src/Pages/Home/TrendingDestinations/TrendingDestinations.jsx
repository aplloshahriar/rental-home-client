import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/pic/home1.jpg";
import { Link } from "react-router-dom";
import useHomes from "../../../assets/hooks/useHomes";

const TrendingDestinations = () => {
  const [homes] = useHomes();
  const trendingHomes = homes.filter((home) => home.trending === "Yes");
  console.log(homes);

  return (
    <div className="mt-24  md:ms-10 sm:mr-2 lg:ms-64 lg:mr-64 mb-36">
      <h2 className="font-semibold mt-8 text-4xl lg:ms-2 ">
        Trending Destinations
      </h2>
      <h2 className="ms-2 text-lg mt-4 mb-4">
        Explore our selection of the best places
      </h2>

      <div className="ms-2 grid lg:grid-cols-2 gap-x-0 gap-y-8 md:m-0    ">
        {trendingHomes.map((home) => (
          <div className=" mb-8" key={home._id}>
            <img
              src={home.image}
              className="rounded-lg w-11/12 ms-0 mr-0 mb-0  "
              alt=""
            />
            <h2 className="text-2xl font-semibold text-center -ms-8 -mt-16">
              {" "}
              {home.city}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
