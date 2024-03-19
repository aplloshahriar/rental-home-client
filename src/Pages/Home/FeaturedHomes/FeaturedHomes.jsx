import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../../../assets/pic/home1.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const FeaturedHomes = () => {

    // if required
    const imgStyle = {
        // width: "270px",
        // height: "405px",

    }
    const imageOver = {
        position: 'absolute',
        top: '70%',
        transform: ' translate(0%, -40%)',
    }
    return (
       <div className=''>
         <div className='mt-24 ms-36 mr-36 '>
            <SectionTitle
                heading={"Our Featured Homes"}
                subHeading={"Hand-picked selection of quality places"}
            ></SectionTitle>

            {/* swiper "slides per view" from awesome react components */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2  text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2  text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2 text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2 text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2 text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgStyle} className='' src={img1} alt="" />
                    <div>
                        {/* pricing an avatar */}
                        <div className='flex -mt-12 ms-2 mr-2  text-white justify-between'>
                            <div className=''>
                                <h1 className='text-2xl   font-semibold '>$600/night</h1>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-3xl">5</span>
                                </div>
                            </div>
                        </div>

                        {/* other description */}
                        <div className='ms-2 mt-8'>
                            <h1 className=' text-xl font-semibold'>Modern Apartment With Pool</h1>
                            <h1 className=''>972 ,Street 4567,New York</h1>

                            {/* todo icon */}
                            <div className='flex justify-between'>
                                <p className=''>5 Bedrooms</p>
                                <p className=''>2 Baths</p>
                                <p className=''>Guests</p>
                                <p>Apartment</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>


        </div>
       </div>
    );
};

export default FeaturedHomes;