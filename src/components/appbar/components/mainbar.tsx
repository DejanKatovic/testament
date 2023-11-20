import React from "react";
import { Box } from "@mui/material";
import Logo from "src/assets/img/logo.png";
import Mac_logo from "src/assets/img/MacAfee-logo.png";
import Norton_antivirus_logo from "src/assets/img/norton-antivirus-logo.png";

export const Mainbar: React.FC = () => {
  return (
    <Box sx={{ px: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: 1300,
          mx: "auto",
          py: { xs: 2.5, lg: 3.75 },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ height: { xs: 20, lg: 36 } }}
          />
        </Box>
        <Box
          component="img"
          src={Mac_logo}
          alt="Mac_logo"
          sx={{
            height: { xs: 16, lg: 32 },
            mr: 2,
          }}
        />
        <Box
          component="img"
          src={Norton_antivirus_logo}
          alt="Norton_antivirus_logo"
          sx={{
            height: { xs: 16, lg: 32 },
          }}
        />
      </Box>
    </Box>
  );
};
