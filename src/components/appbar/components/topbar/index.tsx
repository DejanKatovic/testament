import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { TopbarItem } from "./item";

import CheckIcon from "src/assets/img/check.png";
import TruckIcon from "src/assets/img/truck.png";
import HeartIcon from "src/assets/img/heart.png";
import CycleIcon from "src/assets/img/cycle.png";

const options = [
  { icon: CheckIcon, text: "30-DAY SATISFACTION GUARANTEE" },
  { icon: TruckIcon, text: "Free delivery on orders over $40.00" },
  { icon: HeartIcon, text: "50.000+ HAPPY CUSTOMERS" },
  { icon: CycleIcon, text: "100% Money Back Guarantee" },
];

export const Topbar: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const renderTopbarItems = () => {
    return options.map((option, index) => (
      <TopbarItem
        key={index}
        icon={option.icon}
        text={option.text}
        index={index}
        selected={selected}
        setSelected={setSelected}
      />
    ));
  };

  const topbarStyles = {
    bgcolor: "#252F3D",
    px: { xs: 2.5, lg: 0 },
  };

  const gridContainerStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 1300,
    mx: "auto",
    height: { xs: 42, lg: 50 },
  };

  return (
    <Box sx={topbarStyles}>
      <Grid container sx={gridContainerStyles}>
        {renderTopbarItems()}
      </Grid>
    </Box>
  );
};

export default Topbar;
