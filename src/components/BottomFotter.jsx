import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton
} from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import React from "react";

export default function BottomFooter() {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        mt: 4,
        py: 3,
        px: 2,
        backgroundColor: "#021231",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left side: copyright + links */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.875rem",
                }}
              >
                Simple Vedas © 2025 All Rights Reserved
              </Typography>

              {/* Policies */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                {[
                  "Privacy Policy",
                  "Refund Policy",
                  "Terms & Conditions",
                  "Shipping Policy",
                ].map((policy, index, arr) => (
                  <React.Fragment key={policy}>
                    <Link
                      href="#"
                      sx={{
                        color: "#ff9800",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {policy}
                    </Link>
                    {index < arr.length - 1 && (
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: "0.875rem",
                        }}
                      >
                        |
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right side: social icons */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, gap: 1 }}
          >
            {[Facebook, Instagram, YouTube].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
