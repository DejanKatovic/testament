import React from "react";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LockIcon from "src/assets/img/lock1.png";
import Pay1 from "src/assets/img/pay1.png";
import Pay2 from "src/assets/img/pay2.png";
import Pay3 from "src/assets/img/pay3.png";
import Pay4 from "src/assets/img/pay4.png";
import Pay5 from "src/assets/img/pay5.png";
import Pay6 from "src/assets/img/pay6.png";
import Pay7 from "src/assets/img/pay7.png";

const payments = [
  { id: 1, icon: Pay1 },
  { id: 2, icon: Pay2 },
  { id: 3, icon: Pay3 },
  { id: 4, icon: Pay4 },
  { id: 5, icon: Pay5 },
  { id: 6, icon: Pay6 },
  { id: 7, icon: Pay7 },
];

export const PayCheck: React.FC = () => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box>
      <Box
        sx={{
          mt: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #CFCFCF",
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1,
            borderRadius: 4,
            display: "flex",
            flexDirection: matchesXS ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "nowrap",
              textAlign: "center",
            }}
          >
            <Typography variant="caption">Free Shipping</Typography>
          </Box>
          <Divider
            orientation={matchesXS ? "horizontal" : "vertical"}
            flexItem
            sx={{ mx: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "nowrap",
            }}
          >
            <Box
              component="img"
              src={LockIcon}
              alt="Secure Lock Icon"
              sx={{ width: 12, height: 12, mx: 1 }}
            />
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              Secure 256-Bit SSL Encryption
            </Typography>
          </Box>

          <Divider
            orientation={matchesXS ? "horizontal" : "vertical"}
            sx={{ display: { xs: "none", lg: "flex" } }}
            flexItem
          />
          <Box sx={{ xs: "none", lg: "block" }}>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                overflow: "auto",
                flexWrap: "nowrap",
              }}
            >
              {payments.map((payment) => (
                <Box
                  key={payment.id}
                  component="img"
                  src={payment.icon}
                  alt={`Payment Method ${payment.id}`}
                  sx={{
                    width: 24,
                    height: 14,
                    "&:not(:last-child)": { mr: 1 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Divider
            orientation={matchesXS ? "horizontal" : "vertical"}
            flexItem
          />
          <Box>
            <Box
              sx={{
                overflow: "auto",
                flexWrap: "nowrap",
              }}
            >
              {payments.map((payment) => (
                <Box
                  key={payment.id}
                  component="img"
                  src={payment.icon}
                  alt={`Payment Method ${payment.id}`}
                  sx={{
                    width: 24,
                    height: 14,
                    "&:not(:last-child)": { mr: 1 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: 1.5, lg: 2.5 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 500,
            fontSize: { xs: 12, lg: 18 },
            lineHeight: { xs: "16.39px", lg: "24.59px " },
            color: "#F82C2C",
            textDecoration: "underline",
          }}
        >
          NO THANKS, I DON'T WANT THIS.
        </Typography>
      </Box>
    </Box>
  );
};
