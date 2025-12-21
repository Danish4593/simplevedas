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
      maxWidth="xl"
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
          justifyContent: "space-between",
          gap: { xs: 4, md: 8, lg: 12 },
          minHeight: { xs: "auto", md: "50vh" },
        }}
      >
        {/* Left Side - Image with decorative frame */}
        <Box
          sx={{
            position: "relative",
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Decorative corner frames */}
          <Box
            sx={{
              position: "absolute",
              top: -15,
              left: -15,
              width: 80,
              height: 80,
              borderTop: "3px solid #FFB74D",
              borderLeft: "3px solid #FFB74D",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -15,
              right: -15,
              width: 80,
              height: 80,
              borderBottom: "3px solid #FFB74D",
              borderRight: "3px solid #FFB74D",
              zIndex: 1,
            }}
          />
          
          <Card
            sx={{
              width: { xs: 240, sm: 280, md: 320, lg: 350 },
              height: { xs: 320, sm: 380, md: 420, lg: 460 },
              borderRadius: 0,
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              border: "8px solid #fff",
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
            textAlign: "center",
            position: "relative",
            pl: { md: 6 },
          }}
        >
          {/* Vertical orange line on the right */}
          <Box
            sx={{
              position: "absolute",
              right: -50,
              top: "50%",
              transform: "translateY(-50%)",
              width: 3,
              height: "80%",
              backgroundColor: "#FFB74D",
              display: { xs: "none", md: "block" },
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "2.8rem",
                lg: "3.2rem",
              },
              fontWeight: 400,
              color: "#1a1a1a",
              mb: 2,
              lineHeight: 1.3,
              letterSpacing: "-0.5px",
            }}
          >
            Welcome to Simple Vedas
          </Typography>

          {/* Decorative lines */}
          <Box 
            sx={{ 
              mb: 3,
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 3,
                backgroundColor: "#FFB74D",
              }}
            />
            <Box
              sx={{
                width: 30,
                height: 3,
                backgroundColor: "#FFB74D",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.4rem", md: "1.5rem" },
              fontWeight: 400,
              color: "#FFB74D",
              mb: 4,
              letterSpacing: "0.5px",
            }}
          >
            Making Spirituality Simple for You
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.9,
              color: "#666",
              mb: 4,
              textAlign: "left",
              letterSpacing: "0.2px",
            }}
          >
            Simple Vedas is to serve as a bridge between the ancient and the modern, 
            between the spiritual and the material, between the philosophy and the 
            practice, so that one can easily understand, appreciate, and apply the 
            Vedic technologies in one's life, bringing to it more meaning and content, 
            and thus enjoy the bliss that we all are really made for.
          </Typography>

          <Button
            variant="text"
            size="large"
            sx={{
              color: "#666",
              fontSize: { xs: "0.95rem", md: "1rem" },
              px: 0,
              py: 1,
              textTransform: "none",
              fontWeight: 400,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#FFB74D",
              },
              "& .arrow": {
                marginLeft: "8px",
                transition: "margin-left 0.3s ease",
              },
              "&:hover .arrow": {
                marginLeft: "12px",
              },
            }}
          >
            Read More <span className="arrow">»</span>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}