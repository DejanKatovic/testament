import React from "react";
import { Grid } from "@mui/material";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";

export const MainContent: React.FC = () => {
  const gridStyles = {
    backgroundColor: { lg: "#FAFAFA" },
    mt: { xs: 3, lg: 5 },
    p: { xs: 0, lg: 5 },
  };

  const gridItemLeftStyles = {
    pr: { lg: 2.5 },
  };

  const gridItemRightStyles = {
    pl: { lg: 2.5 },
  };

  return (
    <Grid container sx={gridStyles}>
      <Grid item xs={12} lg={6} sx={gridItemLeftStyles}>
        <LeftComponent />
      </Grid>
      <Grid item xs={12} lg={6} sx={gridItemRightStyles}>
        <RightComponent />
      </Grid>
    </Grid>
  );
};

export default MainContent;
