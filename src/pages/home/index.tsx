import React from "react";
import { Box } from "@mui/material";
import { AppBar } from "src/components/appbar";
import { Header } from "./components/header";
import { Step } from "./components/step";
import { MainContent } from "./components/mainContent";
import Footer from "src/components/footer";

export const Home: React.FC = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 2.5,
          py: { xs: 6.25, lg: 4 },
          maxWidth: 1300,
          mx: "auto",
          backgroundColor: { xs: "#FAFAFA", lg: "white" },
        }}
      >
        <Header />
        <Step />
        <MainContent />
      </Box>
      <Footer />
    </>
  );
};
