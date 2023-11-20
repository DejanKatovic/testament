import React from "react";
import { Box } from "@mui/material";
import contentPic1 from "src/assets/img/contentPic1.png";

export const ProductImg: React.FC = () => {
  return (
    <Box
      component="img"
      src={contentPic1}
      alt="contentPic1"
      sx={{
        borderRadius: "10px",
        width: "100%",
      }}
    />
  );
};
