import React from "react";
import { Box, Button } from "@mui/material";
import ArrowImg from "src/assets/img/ARROW.png";

export const ActiionButton: React.FC = () => {
  const buttonTextStyle = {
    color: "white",
    fontWeight: 700,
    fontSize: { xs: 14, lg: 20 },
    lineHeight: { xs: "19.12px", lg: "27.32px" },
    py: 2,
    px: 0,
  };

  const arrowStyle = {
    width: { xs: 12, lg: 16 },
    height: { xs: 12, lg: 16 },
    pl: { xs: "19.76px !important", lg: 2 },
  };

  return (
    <Box sx={{ mt: { xs: 3, lg: 4 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#59AE43",
          borderRadius: "50px",
        }}
      >
        <Button variant="text" sx={buttonTextStyle}>
          YES - CLAIM MY DISCOUNT
        </Button>
        <Box component="img" src={ArrowImg} alt="ArrowImg" sx={arrowStyle} />
      </Box>
    </Box>
  );
};
