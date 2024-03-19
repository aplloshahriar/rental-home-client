
import { Autocomplete, TextField } from "@mui/material";
import img1 from "../../../assets/pic/wallpaperflare.com_wallpaper.jpg";

import Picker from "./Picker";
// import Calendar from "./Calendar";



const Banner = () => {
    // css for text overlap on image
    const centerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
    }

    // auto complete for places [auto complete logic from mui]
    const places = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"
    ];



    return (
        <div className="container">
            <img className="  " src={img1} alt="" />
            <div style={centerStyle}>
                <h2 className=" text-4xl ms-2 font-bold "> Book & Experience Amazing Places </h2>
                <p className="ms-24 mt-8 text-xl ">Lorem ipsum, dolor sit amet consectetur  </p>

                <div className="flex">
                    {/* search options logic from mui*/}
                    <Autocomplete className="bg-white mt-4 mr-2 rounded"
                        disablePortal
                        id="combo-box-demo"
                        options={places}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Where to go?"
                            // when hover the box becomes skyblue
                            sx={{
                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'skyblue',
                                },
                            }} />}
                    />
                    {/*picker from ant design */}
                    <Picker  ></Picker>
                    <button style={{ width: '18%', height: '55px' }} className="btn btn-error text-white ms-2 mt-4">Search</button>
                </div>

            </div>





        </div>
    );
};

export default Banner;