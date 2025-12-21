import { useState, useEffect, useRef, useMemo } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import gitaCourse from "../assets/images/gita-course.jpg";
import courseApp from "../assets/images/course-app.jpg";
import PageBanner from "../assets/images/home-page-banners.png";

const images = [PageBanner, gitaCourse, courseApp];

const Carousel = () => {
    const [current, setCurrent] = useState(1); // Start at 1 because we duplicate first image
    const [isTransitioning, setIsTransitioning] = useState(true);
    const carouselRef = useRef(null);

    // Create infinite loop by duplicating first and last images
    const infiniteImages = useMemo(() => [images[images.length - 1], ...images, images[0]], []);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
}, []);

// Handle seamless loop transitions
useEffect(() => {
  if (current === 0) {
    // Jump to last real image without animation
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrent(infiniteImages.length - 2);
      setTimeout(() => setIsTransitioning(true), 50);
    }, 700);
  } else if (current === infiniteImages.length - 1) {
    // Jump to first real image without animation
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrent(1);
      setTimeout(() => setIsTransitioning(true), 50);
    }, 700);
  }
}, [current, infiniteImages.length]);

const prevSlide = () => {
    setCurrent((prev) => prev - 1);
};

const nextSlide = () => {
    setCurrent((prev) => prev + 1);
};

return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Slides */}
    <Box
        ref={carouselRef}
        display="flex"
        sx={{
          transform: `translateX(-${current * 100}%)`,
        transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
        }}
    >
        {infiniteImages.map((img, index) => (
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

      {/* Navigation Buttons - Bottom Right Corner */}
    <Box
        position="absolute"
        bottom={{ xs: 8, sm: 16 }}
        right={{ xs: 8, sm: 16 }}
        display="flex"
        gap={0}
    >
        <IconButton
            onClick={prevSlide}
            sx={{
            color: "white",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            borderRadius: 0,
            minWidth: "auto",
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent",
            },
            }}
        >
            <ChevronLeft fontSize="inherit" />
        </IconButton>
        <IconButton
            onClick={nextSlide}
            sx={{
            color: "white",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            borderRadius: 0,
            minWidth: "auto",
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent",
            },
            }}
        >
            <ChevronRight fontSize="inherit" />
        </IconButton>
    </Box>
    </Box>
);
};

export default Carousel;
