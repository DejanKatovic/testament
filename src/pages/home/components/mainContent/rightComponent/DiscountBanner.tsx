import React from "react";
import { Box, Typography } from "@mui/material";
import Pic2 from "src/assets/img/%.png";

interface BannerItemProps {
  text: string;
  color: string;
  fontSize: { xs: number; lg: number };
}

const BannerItem: React.FC<BannerItemProps> = ({ text, color, fontSize }) => (
  <Typography
    variant="caption"
    sx={{
      color,
      fontSize,
      lineHeight: { xs: "19.6px", lg: "22.4px" },
    }}
  >
    {text}
  </Typography>
);

export const DiscountBanner: React.FC = () => {
  return (
    <Box sx={{ mt: { xs: 3, lg: 4 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EDF3FD",
          borderRadius: "10px",
          px: 2,
          py: 1.5,
        }}
      >
        <Box
          component="img"
          src={Pic2}
          alt="Pic2"
          sx={{
            borderRadius: "50%",
            width: { xs: 24, lg: 32 },
            height: { xs: 24, lg: 32 },
            backgroundColor: "#2C7EF8",
          }}
        />
        <Box
          sx={{
            pl: 2,
            wordWrap: "break-word",
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
          }}
        >
          <BannerItem
            text="Save"
            color="#000000"
            fontSize={{ xs: 14, lg: 16 }}
          />
          <BannerItem
            text="53%"
            color="#2C7EF8"
            fontSize={{ xs: 14, lg: 16 }}
          />
          <BannerItem
            text="and get"
            color="#000000"
            fontSize={{ xs: 14, lg: 16 }}
          />
          <BannerItem
            text="6 extra Clarifision"
            color="#2C7EF8"
            fontSize={{ xs: 14, lg: 16 }}
          />
          <BannerItem
            text="for only"
            color="#000000"
            fontSize={{ xs: 14, lg: 16 }}
          />
          <BannerItem
            text="$14 each"
            color="#2C7EF8"
            fontSize={{ xs: 14, lg: 16 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
