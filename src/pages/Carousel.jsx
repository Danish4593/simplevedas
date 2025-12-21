import { useState, useEffect } from "react";
import { Box, IconButton, Typography, Container } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import gitaCourse from "../assets/images/gita-course.jpg";
import courseApp from "../assets/images/course-app.jpg";
import PageBanner from "../assets/images/home-page-banners.png";

const images = [PageBanner, gitaCourse, courseApp];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
}, []);

const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
};

const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
};

return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Slides */}
    <Box
        display="flex"
        sx={{
          transform: `translateX(-${current * 100}%)`,
        transition: "transform 0.7s ease-in-out",
        }}
    >
        {images.map((img, index) => (
        <Box
            key={index}
            component="img"
            src={img}
            alt={`Slide ${index + 1}`}
            sx={{
            width: "100%",
            flexShrink: 0,
            objectFit: "cover",
            height: {
                xs: 250,
                sm: 350,
                md: 450,
                lg: 550,
            },
            }}
        />
        ))}
    </Box>

      {/* Previous Button */}
    <IconButton
        onClick={prevSlide}
        sx={{
        position: "absolute",
        top: "50%",
        left: { xs: 8, sm: 16, md: 24 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255,255,255,0.3)",
        color: "white",
        zIndex: 10,
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.5)",
        },
        }}
    >
        <ChevronLeft sx={{ fontSize: { xs: 24, md: 32 } }} />
    </IconButton>

      {/* Next Button */}
    <IconButton
        onClick={nextSlide}
        sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 8, sm: 16, md: 24 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255,255,255,0.3)",
        color: "white",
        zIndex: 10,
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.5)",
        },
        }}
    >
        <ChevronRight sx={{ fontSize: { xs: 24, md: 32 } }} />
    </IconButton>

      {/* Dots */}
    <Box
        position="absolute"
        bottom={{ xs: 16, sm: 24 }}
        left="50%"
        sx={{ transform: "translateX(-50%)", zIndex: 10 }}
        display="flex"
        gap={1.5}
    >
        {images.map((_, index) => (
        <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
            cursor: "pointer",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            width: current === index ? { xs: 14, sm: 18 } : { xs: 10, sm: 14 },
            height: current === index ? { xs: 14, sm: 18 } : { xs: 10, sm: 14 },
            backgroundColor:
                current === index ? "white" : "rgba(255,255,255,0.6)",
            boxShadow: current === index ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
            }}
        />
        ))}
    </Box>
    </Box>
);
};

export default Carousel;
