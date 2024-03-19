import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const CustomAutocomplete = () => {
    const places = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"
    ];

    return (
        <div>
            <Autocomplete
                className="bg-white mt-4 rounded   "
                disablePortal
                id="combo-box-demo"
                options={places}
                style={{ width: 400, height: 80, border: '1px solid rgba(128, 128, 128, 0)' }} // Adjust width and height as needed
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Where to go?"
                        // when hover the box becomes skyblue
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'skyblue',
                            },
                        }}
                    />
                )}
            />
        </div>
    );
};

export default CustomAutocomplete;
