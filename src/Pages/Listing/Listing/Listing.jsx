import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../Shared/Header/Header';
import AutoComplete from "./CustomAutocomplete";
import CustomAutocomplete from './CustomAutocomplete';
import Picker from './Picker';
import { Avatar, Divider, ListItemAvatar, ListItemText, TextField, Typography, List, ListItem, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import img from "../../../assets/pic/home1.jpg";
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TrendingDestinations from "../../Home/TrendingDestinations/TrendingDestinations";


const Listing = () => {


    // rating from mui
    const [value, setValue] = React.useState(0);


    return (
        <div className=''>
            <Helmet>
                <title>Listing</title>
            </Helmet>

            <Header></Header>
            {/* to avoid overlap nav */}
            <h2 className='bg-white p-8 '></h2>


            <div className=' md:grid grid-cols-3 ms-4   m-4 -mb-2 sm:mr-8 '>
                <CustomAutocomplete ></CustomAutocomplete>
                <Picker></Picker>
                {/* todo square button */}
                <div>
                    <div className='grid grid-cols-3 mt-4 lg:mr-2'>


                        <TextField id="outlined-search" label="Todo" type="search" />
                        <button
                            style={{ width: '50%', height: '55px', fontSize: '1rem' }}
                            className='ms-12 btn btn-error text-white font-bold'>
                            Sort</button>
                        <button
                            style={{ width: '70%', height: '55px', fontSize: '1rem' }}
                            className="ms-0 btn btn-error text-white font-bold">
                            Search</button>

                    </div>
                </div>
            </div>




            <section className='bg-slate-50'>
                <div className=' mt-2 sm:mr-2 sm:ms-2 ms-8 mr-8 lg:ms-48 lg:mr-48'>
                    {/* breadcrumb from daisy ui */}
                    <div className="text-sm breadcrumbs  ms-8">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Listing</li>
                        </ul>
                    </div>


                    <h2 className='font-semibold text-4xl ms-8 mb-8'>Listing---Homes</h2>
                    {/* grid here between horizontal line and newsletter*/}
                    <div className='grid sm:grid-cols-1 md:grid-cols-3  '>
                        <div className='col-span-2 '>
                            <hr className='  ' />
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 mt-4 '>
                                {/* homes photo grid in 2 col starts here */}
                                <div className=' bg-white rounded-lg sm:m-2'>
                                    <img className=" rounded-t-lg w-full" src={img} alt="" />

                                    {/* pricing and avatar */}
                                    <div className='flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between  '>
                                        <div className=''>
                                            <h1 className='text-3xl -mt-4  font-semibold w-full'>$600/night</h1>
                                        </div>

                                        {/* avatar here */}
                                        <div className='-mt-4 mr-4'>
                                            <Avatar src="/broken-image.jpg" />
                                        </div>

                                    </div>

                                    {/* other info like bed, bath, name,description */}
                                    <div className='mt-8 ms-2'>
                                        <h2 className='text-lg font-semibold'> Beautiful Cove</h2>
                                        <h2 className='font-thin'> 56 Forest View Dr, San Francisco, CA 94132</h2>
                                        <h2>
                                            <BedroomParentOutlinedIcon />2 Bedrooms  < BathroomOutlinedIcon />1 Baths
                                            <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast</h2>

                                    </div>

                                </div>
                                <div className=' bg-white rounded-lg sm:m-2'>
                                    <img className=" rounded-t-lg w-full" src={img} alt="" />

                                    {/* pricing and avatar */}
                                    <div className='flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between  '>
                                        <div className=''>
                                            <h1 className='text-3xl -mt-4  font-semibold w-full'>$600/night</h1>
                                        </div>

                                        {/* avatar here */}
                                        <div className='-mt-4 mr-4'>
                                            <Avatar src="/broken-image.jpg" />
                                        </div>

                                    </div>

                                    {/* other info like bed, bath, name,description */}
                                    <div className='mt-8 ms-2'>
                                        <h2 className='text-lg font-semibold'> Beautiful Cove</h2>
                                        <h2 className='font-thin'> 56 Forest View Dr, San Francisco, CA 94132</h2>
                                        <h2>
                                            <BedroomParentOutlinedIcon />2 Bedrooms  < BathroomOutlinedIcon />1 Baths
                                            <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast</h2>

                                    </div>

                                </div>
                                <div className=' bg-white rounded-lg sm:m-2'>
                                    <img className=" rounded-t-lg w-full" src={img} alt="" />

                                    {/* pricing and avatar */}
                                    <div className='flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between  '>
                                        <div className=''>
                                            <h1 className='text-3xl -mt-4  font-semibold w-full'>$600/night</h1>
                                        </div>

                                        {/* avatar here */}
                                        <div className='-mt-4 mr-4'>
                                            <Avatar src="/broken-image.jpg" />
                                        </div>

                                    </div>

                                    {/* other info like bed, bath, name,description */}
                                    <div className='mt-8 ms-2'>
                                        <h2 className='text-lg font-semibold'> Beautiful Cove</h2>
                                        <h2 className='font-thin'> 56 Forest View Dr, San Francisco, CA 94132</h2>
                                        <h2>
                                            <BedroomParentOutlinedIcon />2 Bedrooms  < BathroomOutlinedIcon />1 Baths
                                            <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast</h2>

                                    </div>

                                </div>
                                <div className=' bg-white rounded-lg sm:m-2'>
                                    <img className=" rounded-t-lg w-full" src={img} alt="" />

                                    {/* pricing and avatar */}
                                    <div className='flex -mt-10  md:ms-2 md:mr-2 text-white justify-between md:justify-between  '>
                                        <div className=''>
                                            <h1 className='text-3xl -mt-4  font-semibold w-full'>$600/night</h1>
                                        </div>

                                        {/* avatar here */}
                                        <div className='-mt-4 mr-4'>
                                            <Avatar src="/broken-image.jpg" />
                                        </div>

                                    </div>

                                    {/* other info like bed, bath, name,description */}
                                    <div className='mt-8 ms-2'>
                                        <h2 className='text-lg font-semibold'> Beautiful Cove</h2>
                                        <h2 className='font-thin'> 56 Forest View Dr, San Francisco, CA 94132</h2>
                                        <h2>
                                            <BedroomParentOutlinedIcon />2 Bedrooms  < BathroomOutlinedIcon />1 Baths
                                            <WcOutlinedIcon /> 2 Guests <br /> Bed & Breakfast</h2>

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* most right column */}
                        <div className=' '>
                            <h2 className=' m-4 p-8 mt-0 bg-white text-center text-2xl font-semibold'>Newsletter Sign Up!</h2>

                            {/* right side image and info starts here */}
                            <div>
                                <div className='ms-4 mr-4 p-4  bg-white'>
                                    <h2 className='text-xl font-semibold mb-4'>Featured Items</h2>
                                    <div className='flex'>
                                        <img className='w-1/2 rounded-lg' src={img} alt="" />
                                        <div className='ms-2'>
                                            <h2 className='font-semibold'>Beautiful Cove
                                            </h2>

                                            {/* price and rating */}
                                            <h2>$175/night  </h2>
                                            {/* rating from mui */}
                                            <Rating className=''
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />


                                            <h2> 2<BedroomParentOutlinedIcon />  2< BathroomOutlinedIcon />  2<WcOutlinedIcon /></h2>
                                        </div>


                                    </div>

                                </div>
                                <div className='ms-4 mr-4 p-4  bg-white'>
                                    <div className='flex'>
                                        <img className='w-1/2 rounded-lg' src={img} alt="" />
                                        <div className='ms-2'>
                                            <h2 className='font-semibold'>Beautiful Cove
                                            </h2>

                                            {/* price and rating */}
                                            <h2>$175/night  </h2>
                                            {/* rating from mui */}
                                            <Rating className=''
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />


                                            <h2> 2<BedroomParentOutlinedIcon />  2< BathroomOutlinedIcon />  2<WcOutlinedIcon /></h2>
                                        </div>


                                    </div>

                                </div>
                                <div className='ms-4 mr-4 p-4  bg-white'>

                                    <div className='flex'>
                                        <img className='w-1/2 rounded-lg' src={img} alt="" />
                                        <div className='ms-2'>
                                            <h2 className='font-semibold'>Beautiful Cove
                                            </h2>

                                            {/* price and rating */}
                                            <h2>$175/night  </h2>
                                            {/* rating from mui */}
                                            <Rating className=''
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />


                                            <h2> 2<BedroomParentOutlinedIcon />  2< BathroomOutlinedIcon />  2<WcOutlinedIcon /></h2>
                                        </div>


                                    </div>

                                </div>
                                <div className='ms-4 mr-4 p-4  bg-white'>

                                    <div className='flex'>
                                        <img className='w-1/2 rounded-lg' src={img} alt="" />
                                        <div className='ms-2'>
                                            <h2 className='font-semibold'>Beautiful Cove
                                            </h2>

                                            {/* price and rating */}
                                            <h2>$175/night  </h2>
                                            {/* rating from mui */}
                                            <Rating className=''
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />


                                            <h2> 2<BedroomParentOutlinedIcon />  2< BathroomOutlinedIcon />  2<WcOutlinedIcon /></h2>
                                        </div>


                                    </div>

                                </div>
                            </div>

                            {/* explore part */}
                            <div className='ms-4 mr-4 p-4 bg-white mt-8'>
                                <h2 className='font-semibold text-xl mt-4'>Explore</h2>
                                {/* image and text  */}
                                <div className='mt-4'>
                                    <img src={img} className='rounded-md h-36 w-full' alt="" />
                                    <h2 className='-mt-8 text-center text-xl font-semibold'>Miami</h2>
                                </div>
                                <div className='mt-4'>
                                    <img src={img} className='rounded-md h-36 w-full' alt="" />
                                    <h2 className='-mt-8 text-center text-xl font-semibold'>Miami</h2>
                                </div>
                                <div className='mt-4'>
                                    <img src={img} className='rounded-md h-36 w-full' alt="" />
                                    <h2 className='-mt-8 text-center text-xl font-semibold'>Miami</h2>
                                </div>

                            </div>





                        </div>

                    </div>

                </div>
            </section >

        </div >
    );
};

export default Listing;
