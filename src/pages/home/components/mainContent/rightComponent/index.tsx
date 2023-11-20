import React from "react";
import { Box } from "@mui/material";

import { ProductInfo } from "./ProductInfo";
import { ProductDetail } from "./ProductDetail";
import { ProductFeatures } from "./ProductFeatures";
import { DiscountBanner } from "./DiscountBanner";
import { ActiionButton } from "./ActiionButton";
import { PayCheck } from "./PayCheck";
import { SecurityBadge } from "./SecurityBadge";

export const Right: React.FC = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Box sx={containerStyles}>
      <ProductInfo />
      <ProductDetail />
      <ProductFeatures />
      <DiscountBanner />
      <ActiionButton />
      <PayCheck />
      <SecurityBadge />
    </Box>
  );
};

export default Right;
