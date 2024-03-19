import Review from "../Review/Review";
import Banner from "../Banner/Banner";
import Comfort from "../ComfortSection/Comfort";
import FeaturedHomes from "../FeaturedHomes/FeaturedHomes";
import ModernApartment from "../ModernApartment/ModernApartment";
import TrendingDestinations from "../TrendingDestinations/TrendingDestinations";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedHomes></FeaturedHomes>
            <TrendingDestinations></TrendingDestinations>
            <ModernApartment></ModernApartment>
            <Comfort></Comfort>
            <Review></Review>
        </div>
    );
};

export default Home;