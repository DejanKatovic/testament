import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import LeftArrow from "src/assets/img/left.png";
import RightArrow from "src/assets/img/right.png";

interface TopbarItemProps {
  icon: string;
  text: string;
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const TopbarItem: React.FC<TopbarItemProps> = ({
  icon,
  text,
  index,
  selected,
  setSelected,
}) => {
  const handleLeft = () => {
    setSelected((prevSelected) => (prevSelected === 0 ? 3 : prevSelected - 1));
  };

  const handleRight = () => {
    setSelected((prevSelected) => (prevSelected === 3 ? 0 : prevSelected + 1));
  };

  const displayOnXs = selected === index ? "block" : "none";

  return (
    <Grid
      item
      xs={12}
      lg={3}
      sx={{
        display: { xs: displayOnXs, lg: "block" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", lg: "auto" },
        }}
      >
        <Box
          component="img"
          src={LeftArrow}
          alt="leftarrow"
          sx={{
            width: 7.5,
            height: 12.5,
            cursor: "pointer",
            display: { xs: "block", lg: "none" },
          }}
          onClick={handleLeft}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component="img" src={icon} alt="Topbar Icon" sx={{ mr: 1 }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12,
              lineHeight: 1,
              color: "white",
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          component="img"
          src={RightArrow}
          alt="rightarrow"
          sx={{
            width: 7.5,
            height: 12.5,
            cursor: "pointer",
            display: { xs: "block", lg: "none" },
          }}
          onClick={handleRight}
        />
      </Box>
    </Grid>
  );
};

export default TopbarItem;
