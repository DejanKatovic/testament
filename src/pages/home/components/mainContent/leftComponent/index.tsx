import React from "react";
import { Box } from "@mui/material";
import { ProductImg } from "./ProductImg";
import { CustomerReview } from "./CustomerReview";

export const Left: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      <ProductImg />
      <CustomerReview />
    </Box>
  );
};

export default Left;
