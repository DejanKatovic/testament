import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "src/assets/img/image 6.png";

export const SecurityBadge: React.FC = () => {
  const textStyles = {
    fontSize: { xs: 12, lg: 16 },
    fontWeight: 400,
    lineHeight: { xs: "16.8px", lg: "22.4px" },
  };
  return (
    <Box sx={{ mt: { xs: 3, lg: 4 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Box
          component="img"
          src={Image}
          alt="Image"
          sx={{
            width: { xs: 48, lg: 88 },
            height: { xs: 48, lg: 88 },
            pr: 2,
          }}
        />
        <Box
          sx={{
            color: "#4D5254",
            ...textStyles,
            wordWrap: "break-word",
          }}
        >
          <Typography component="span" sx={textStyles}>
            If you are not completely thrilled with your Clarifion - We have a
            &nbsp;&nbsp;
          </Typography>
          <Typography component="span" sx={{ ...textStyles, fontWeight: 700 }}>
            30 day satisfaction guarantee.&nbsp;&nbsp;
          </Typography>
          <Typography component="span" sx={textStyles}>
            Please refer to our return policy at the bottom of the page for more
            details. Happy Shopping!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
