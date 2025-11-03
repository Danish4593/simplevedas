import React from "react";
import guruJiImg from "../assets/images/guruji.png";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function WelcomeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 5, sm: 6, md: 8 },
          minHeight: { xs: "auto", md: "80vh" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: { xs: 240, sm: 280, md: 320 },
              height: { xs: 320, sm: 380, md: 420 },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={guruJiImg}
              alt="Guru Ji - Spiritual Guide"
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Card>
        </Box>

        {/* Right Side - Content */}
        <Box
          sx={{
            flex: 1,
             maxWidth: 'auto',
            ml: { xs: 0, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3rem",
                lg: "3.rem",
              },
              fontWeight: 400,
              color: "#333",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Welcome to Simple Vedas
          </Typography>

          {/* Decorative lines */}
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Box
              sx={{
                width: 60,
                height: 2,
                backgroundColor: "#FFB74D",
                mb: 0.5,
                mx: { xs: "auto", md: 0 },
              }}
            />
            <Box
              sx={{
                width: 40,
                height: 2,
                backgroundColor: "#FFB74D",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Box>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              fontWeight: 500,
              color: "#FFB74D",
              mb: 3,
            }}
          >
            Making Spirituality Simple for You
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.8,
              color: "#555",
              mb: { xs: 3, sm: 4 },
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            Simple Vedas aims to bridge the ancient and the modern, the spiritual
            and the material, the philosophy and the practice — so that one can
            easily understand, appreciate, and apply the Vedic teachings in daily
            life, bringing more meaning and joy.
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#999",
              color: "#666",
              fontSize: { xs: "0.95rem", md: "1rem" },
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.3 },
              textTransform: "none",
              borderRadius: 1,
              "&:hover": {
                borderColor: "#666",
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            Read More ≫
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
