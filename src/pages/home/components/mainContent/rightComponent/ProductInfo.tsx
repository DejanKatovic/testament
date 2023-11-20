import React from "react";
import { Box, Typography } from "@mui/material";

export const ProductInfo: React.FC = () => {
  const typographyStyles = {
    fontSize: { xs: 24, lg: 32 },
    lineHeight: { xs: "33.6px", lg: "44.8px" },
    wordWrap: "word-break",
  };
  return (
    <>
      <Box
        sx={{
          fontWeight: 400,
          textTransform: "capitalize",
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          component="span"
          color="#2C7EF8"
          sx={{
            ...typographyStyles,
            display: "inline-block",
          }}
        >
          ONE TIME ONLY&nbsp;&nbsp;
        </Typography>
        <Typography component="span" color="#000000" sx={typographyStyles}>
          special price for 6 extra Clarifion for only&nbsp;&nbsp;
        </Typography>
        <Typography
          color="#2C7EF8"
          component="span"
          sx={{
            ...typographyStyles,
            display: "inline-block",
          }}
        >
          $14 each&nbsp;&nbsp;
        </Typography>
        <Typography color="#000000" component="span" sx={typographyStyles}>
          ($84.00 total!)
        </Typography>
      </Box>
    </>
  );
};
