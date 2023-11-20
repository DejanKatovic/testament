import React from "react";
import { Box, Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Box sx={{ mt: { lg: "-50px" }, xs: { backgroundColor: "#FAFAFA" } }}>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: { xs: 32, lg: 48 },
          lineHeight: { xs: "44.8px", lg: "48px" },
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Wait! Your Order In Progress
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          fontSize: { xs: 16, lg: 24 },
          lineHeight: { xs: "22.4px", lg: "24px" },
          fontWeight: 400,
          textAlign: "center",
          color: "#4D5254",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
    </Box>
  );
};
