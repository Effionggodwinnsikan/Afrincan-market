import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
    value: number;
    
}

interface openingProps {
  label1?: string;
  label2?: string;
  time1?: string;
  time2?: string;
  days?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
              <div className="flex justify-between items-center my-3">
                  {children}
                 
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OpeningTab({label1, label2, days, time1, time2}:openingProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    };
    

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        //   aria-label="basic tabs example"
      >
        <Tab label={label1} {...a11yProps(0)} />
        <Tab label={label2} {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <p className="text-sm font-medium">{days}</p>
        <span className="text-sm opacity-[0.8]">{time1}</span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="text-sm font-normal">{days}</p>
        <span className="text-sm opacity-[0.8]">{time2}</span>
      </TabPanel>
    </Box>
  );
}
