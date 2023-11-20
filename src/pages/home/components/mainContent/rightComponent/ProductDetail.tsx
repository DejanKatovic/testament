import React from "react";
import { Box, Typography } from "@mui/material";
import Pic1 from "src/assets/img/pic1.png";
import StarIcon from "src/assets/img/star.png";

export const ProductDetail: React.FC = () => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Box
        key={index}
        component="img"
        sx={{
          width: { xs: 12, lg: 18 },
          height: { xs: 12, lg: 18 },
          paddingRight: "2px",
          borderColor: "#FBBC04",
        }}
        src={StarIcon}
      />
    ));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginTop: { xs: 3, lg: 4 },
          flexDirection: "row",
        }}
      >
        <Box
          component="img"
          src={Pic1}
          alt="Pic1"
          sx={{
            borderRadius: "10px",
            width: { xs: 80, lg: 134 },
            height: { xs: 80, lg: 134 },
            backgroundColor: "#2C7EF8",
          }}
        />

        <Box
          sx={{
            paddingLeft: { xs: 2, lg: 3 },
            paddingTop: { xs: "9px", lg: 0 },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: 14, lg: 20 },
                lineHeight: { xs: "19.6px", lg: "28px" },
                color: "#000000",
              }}
            >
              Clarifion Air Ionizer
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 10, lg: 16 },
                  lineHeight: { xs: "13.66px", lg: "21.86px" },
                  color: "#969696",
                  paddingRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                $180
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, lg: 22 },
                  lineHeight: { xs: "19.6px", lg: "30.8px" },
                  color: "#2C7EF8",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                $84
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>{renderStars()}</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: { xs: 8, lg: 16 },
                height: { xs: 8, lg: 16 },
                backgroundColor: "#2C7EF8",
                borderRadius: "100%",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 300,
                fontSize: { xs: 12, lg: 16 },
                lineHeight: { xs: "16.39px", lg: "21.86px" },
                color: "#37465A",
                display: "flex",
                alignItems: "center",
                paddingLeft: 2,
              }}
            >
              12 left in Stock
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              marginTop: { lg: 2 },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 400,
                fontSize: { xs: 12, lg: 16 },
                lineHeight: { xs: "16.8px", lg: "22.4px" },
                color: "#4D5254",
              }}
            >
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          marginTop: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16.8px",
            color: "#4D5254",
          }}
        >
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </Typography>
      </Box>
    </Box>
  );
};
