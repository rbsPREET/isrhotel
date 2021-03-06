import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";

export default function LabTabs(props) {
  const [value, setValue] = useState("Overview");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {props.tabSections.map((item, index) => (
                <Tab key={index} label={item.title} value={item.title} />
            ))}
          </TabList>
        </Box>
        {props.tabSections.map((item, index) => (
          <TabPanel className={props.className} key={index} value={item.title}>
            {item.data}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
