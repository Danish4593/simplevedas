import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import gitaCourse from "../assets/images/gita-course.jpg";
import courseApp from "../assets/images/course-app.jpg";
import PageBanner from "../assets/images/home-page-banners.png";

const images = [PageBanner, gitaCourse, courseApp];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
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
                xs: 200,
                sm: 300,
                md: 400,
                lg: 500,
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
        left: { xs: 8, sm: 16 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        }}
    >
        <ChevronLeft />
    </IconButton>

      {/* Next Button */}
    <IconButton
        onClick={nextSlide}
        sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 8, sm: 16 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        }}
    >
        <ChevronRight />
    </IconButton>

      {/* Dots */}
    <Box
        position="absolute"
        bottom={{ xs: 8, sm: 16 }}
        left="50%"
        sx={{ transform: "translateX(-50%)" }}
        display="flex"
        gap={1}
    >
        {images.map((_, index) => (
        <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
            cursor: "pointer",
            borderRadius: "50%",
            transition: "all 0.3s",
            width: current === index ? { xs: 12, sm: 16 } : { xs: 8, sm: 12 },
            height: current === index ? { xs: 12, sm: 16 } : { xs: 8, sm: 12 },
            backgroundColor:
                current === index ? "white" : "rgba(200,200,200,0.9)",
            }}
        />
        ))}
    </Box>
    </Box>
);
};

export default Carousel;
