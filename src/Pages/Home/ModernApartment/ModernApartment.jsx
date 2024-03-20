import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from "../../../assets/pic/home1.jpg";
import img2 from "../../../assets/pic/wallpaperflare.com_wallpaper.jpg";

const ModernApartment = () => {
    return (
        <div className="relative">
            <img className='h-auto' src={img2} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/12  md:w-3/5 lg:w-3/5 xl:w-2/3'>
                <div className='p-8 sm:p-12 md:p-16 lg:p-24 bg-white bg-opacity-80'>
                    <p className='text-3xl sm:text-4xl font-semibold'>Modern Apartment</p>
                    <p className='text-xl sm:text-2xl'>$1700</p>
                    <p className='text-sm sm:text-base'>I am text block. Click edit button to change this text. Lorem ipsum <br />dolor sit amet, consectetur adipiscing elite.</p>
                    <button className='btn btn-error text-white mt-4'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ModernApartment;
