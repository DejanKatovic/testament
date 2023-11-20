import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Lock from "../../assets/img/lock (7).png";

const Footer: React.FC = () => {
  const commonTextStyles = {
    color: "white",
    fontSize: { xs: 12, lg: 16 },
    fontFamily: "Manrope",
    fontWeight: "400",
    wordWrap: "break-word",
  };

  return (
    <Box
      sx={{
        bgcolor: "#252F3D",
        padding: { xs: 20, lg: "24px 119px 24px 127px" },
        display: "flex",
        justifyContent: { xs: "center", lg: "space-between" },
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Box
        sx={{
          py: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            ...commonTextStyles,
            textTransform: "capitalize",
          }}
        >
          Copyright (c) 2023
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ borderColor: "white" }}
        />
        <Typography
          sx={{
            ...commonTextStyles,
            textTransform: "lowercase",
            lineHeight: "22.4px",
          }}
        >
          Clarifionsupport@clarifion.com
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
          gap: 2,
        }}
      >
        <Box component="img" src={Lock} alt="lock7" />
        <Typography
          sx={{
            ...commonTextStyles,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Secure 256-bit SSL encryption.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
