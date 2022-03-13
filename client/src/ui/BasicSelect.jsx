import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from "../css/ui/BasicSelect.module.css";

export default function BasicSelect() {
    const [time, setTime] = React.useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <Box>
            <FormControl fullWidth>
                {time === '' && (
                    <InputLabel shrink={false} style={{ margin: 0 }}>Time Slots</InputLabel>
                )}
                <Select
                    value={time || ''}
                    onChange={handleChange}
                    displayEmpty
                    MenuProps={{ disableScrollLock: true }}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box >
    );
}