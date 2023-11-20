import React from "react";
import { Box } from "@mui/material";
import { Topbar } from "./components/topbar";
import { Mainbar } from "./components/mainbar";

export const AppBar: React.FC = () => {
  return (
    <Box>
      <Topbar />
      <Mainbar />
    </Box>
  );
};
