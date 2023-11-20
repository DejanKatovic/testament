import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import TickCircle from "src/assets/img/tick-circle.png";

interface StepItemProps {
  option: { id: number; text: string; status: string };
  index: number;
}

export const StepItem: React.FC<StepItemProps> = ({ option, index }) => {
  const checkedIcon = (
    <Box
      sx={{
        backgroundColor: "#85BF55",
        width: { xs: 20, lg: 40 },
        height: { xs: 20, lg: 40 },
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={TickCircle}
        alt="Tick Circle"
        sx={{
          width: { xs: 8, lg: 16 },
          height: { xs: 8, lg: 16 },
        }}
      />
    </Box>
  );

  const inProgressIcon = (
    <Box
      sx={{
        backgroundColor: "#2C7EF8",
        width: { xs: 20, lg: 40 },
        height: { xs: 20, lg: 40 },
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: { xs: 14, lg: 20 },
        lineHeight: { xs: "15.4px", lg: "22px" },
      }}
    >
      {index + 1}
    </Box>
  );

  const incompleteIcon = (
    <Box
      sx={{
        backgroundColor: "white",
        width: { xs: 20, lg: 40 },
        height: { xs: 20, lg: 40 },
        border: "1px solid #2C7EF8",
        color: "#2C7EF8",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: { xs: 14, lg: 20 },
        lineHeight: { xs: "15.4px", lg: "22px" },
      }}
    >
      {index + 1}
    </Box>
  );

  let iconToRender;
  if (option.status === "completed") {
    iconToRender = checkedIcon;
  } else if (option.status === "in-progress") {
    iconToRender = inProgressIcon;
  } else {
    iconToRender = incompleteIcon;
  }

  return (
    <Grid item xs={12} lg={3}>
      <Box sx={{ display: { xs: "block", lg: "flex" }, alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {iconToRender}
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 12, lg: 20 },
            fontWeight: option.status === "in-progress" ? 700 : 400,
            lineHeight: { sx: "13.2px", lg: "22px" },
            paddingLeft: { lg: "13px" },
            mt: { xs: 1, lg: 0 },
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: { xs: 12, lg: 20 },
                fontWeight: option.status === "in-progress" ? 700 : 400,
                lineHeight: { xs: "13.2px", lg: "22px" },
                paddingLeft: { lg: "13px" },
                mt: { xs: 1, lg: 0 },
                textAlign: "center",
                display: { xs: "none", lg: "block" },
              }}
            >
              {`Step ${index + 1} : `}
            </Typography>
            <Typography
              sx={{
                fontWeight: option.status === "in-progress" ? 700 : 400,
                fontSize: { xs: 12, lg: 20 },
                lineHeight: { xs: "13.2px", lg: "22px" },
                paddingLeft: { lg: "13px" },
                mt: { xs: 1, lg: 0 },
                textAlign: "center",
              }}
            >
              &nbsp;&nbsp;{option.text}
            </Typography>
          </Box>
        </Typography>
      </Box>
    </Grid>
  );
};
