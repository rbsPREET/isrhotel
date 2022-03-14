import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "../css/ui/BasicSelect.module.css";
import FlexColumn from "./FlexColumn";

const BasicSelect = (props) => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        {time === "" && (
          <InputLabel shrink={false} style={{ margin: 0 }}>
            Time Slots
          </InputLabel>
        )}
        <Select
          value={time || ""}
          onChange={handleChange}
          displayEmpty
          MenuProps={{ disableScrollLock: true }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <FlexColumn customWidth={100}>
            {props.dataOptions.map((option) => (
              <MenuItem value={10}>{option.value}</MenuItem>
            ))}
          </FlexColumn>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect

