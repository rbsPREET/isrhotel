import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Time Slots" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: '8:30 am - 9:30 am', year: 1994 },
    { label: '9:30 am - 10:30 am', year: 1972 },
    { label: '10:30 am - 11:30 am', year: 1974 },
    { label: '11:30 am - 12:30 pm', year: 2008 },
];