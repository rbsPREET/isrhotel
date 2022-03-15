import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import FlexColumn from "./FlexColumn";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <FlexColumn center customWidth="100">
              <TextField sx={{ width: "90%",marginTop:'15px' }} {...startProps} />
              {/* <Box sx={{ mx: 2 }}> to </Box> */}
              <TextField sx={{ width: "90%",marginTop:'15px',marginBottom:'5px' }} {...endProps} />
            </FlexColumn>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
