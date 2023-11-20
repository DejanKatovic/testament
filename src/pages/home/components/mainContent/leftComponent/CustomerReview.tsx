import React from "react";
import { Box, Typography } from "@mui/material";

import StarIcon from "src/assets/img/star.png";
import AvatarRect from "src/assets/img/Rectangle 1127.png";
import VerifiedTick from "src/assets/img/verifiedTick.png";

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

export const CustomerReview: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 3,
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", pt: 3, pl: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              mr: "13px",
            }}
            src={AvatarRect}
          />
          <Box
            sx={{
              py: "6.35px",
              height: "35.3px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>{renderStars()}</Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="caption"
                gutterBottom
                sx={{
                  fontSize: { xs: 14, lg: 16 },
                  fontWeight: 700,
                  lineHeight: "14px",
                  marginBottom: 0,
                }}
              >
                Ken T.
              </Typography>
              <Box
                component="img"
                sx={{
                  width: 16,
                  height: 16,
                  padding: "0 10px",
                }}
                src={VerifiedTick}
              />
              <Typography
                variant="caption"
                gutterBottom
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  fontWeight: 400,
                  lineHeight: "14.4px",
                  marginBottom: 0,
                  color: "#5BB59A",
                }}
              >
                Verified Customer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          fontSize: { xs: 16, lg: 18 },
          fontWeight: 400,
          lineHeight: "24px",
          margin: "18px 0 0 0 ",
          color: "#4D5254",
          padding: "0 24px 24px 24px",
        }}
      >
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </Typography>
    </Box>
  );
};
