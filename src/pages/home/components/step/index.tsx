import React from "react";
import { Box } from "@mui/material";
import { StepItem } from "./item";

export const Step: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: { xs: 3, lg: 7.5 },
      }}
    >
      {[
        { id: 1, text: "Cart Review", status: "completed" },
        { id: 2, text: "Checkout", status: "completed" },
        { id: 3, text: "Special Offer", status: "in-progress" },
        { id: 4, text: "Confirmation", status: "incomplete" },
      ].map((option, index) => (
        <StepItem key={option.id} option={option} index={index} />
      ))}
    </Box>
  );
};
