import { useState, useEffect, useRef, useMemo } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Sample images for demonstration
const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=500&fit=crop"
];

const Carousel = () => {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  const infiniteImages = useMemo(() => [images[images.length - 1], ...images, images[0]], []);

  // Reset progress bar
  const resetProgress = () => {
    setProgress(0);
  };

  // Start progress animation
  useEffect(() => {
    // Clear existing interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Reset progress
    setProgress(0);

    // Update progress every 30ms for smooth animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / (3000 / 30)); // Increment to reach 100% in 3000ms
      });
    }, 30);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [current]);

  // Auto-slide every 3s
  useEffect(() => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  // Handle seamless loop transitions
  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(infiniteImages.length - 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    } else if (current === infiniteImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    }
  }, [current, infiniteImages.length]);

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    resetProgress();
    
    // Reset auto-slide timer
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    resetProgress();
    
    // Reset auto-slide timer
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
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
                lg: 600,
              },
            }}
          />
        ))}
      </Box>

      {/* Progress Bar */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        height={{ xs: 8, sm: 10 }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#e6452b",
            transition: "width 0.03s linear",
          }}
        />
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