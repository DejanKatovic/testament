import React from "react";
import { Box, Typography } from "@mui/material";
import TickCircle from "src/assets/img/blueTick.png";

interface CheckItemProps {
  text: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
    <Box
      component="img"
      src={TickCircle}
      alt="TickCircle"
      sx={{
        width: { xs: 14, lg: 22 },
        height: { xs: 14, lg: 22 },
        color: "#2C7EF8",
        pr: 1.5,
      }}
    />
    <Typography
      variant="caption"
      sx={{
        fontWeight: 400,
        fontSize: { xs: 12, lg: 16 },
        lineHeight: { xs: "19.2px", lg: "25.6px" },
        color: "#4D5254",
        display: "inline-block",
        alignItems: "center",
        textAlign: { lg: "center" },
      }}
    >
      {text}
    </Typography>
  </Box>
);

export const ProductFeatures: React.FC = () => {
  const checkItems: string[] = [
    "Negative Ion Technology may help with allergens",
    "Designed for air rejuvenation",
    "Protect for every room in all types of places.",
  ];

  return (
    <Box sx={{ mt: { xs: 3, lg: 4 } }}>
      {checkItems.map((item, index) => (
        <CheckItem key={index} text={item} />
      ))}
    </Box>
  );
};
