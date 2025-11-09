import { useRef } from "react";
import Slider from "react-slick";
import CourseCard from "../pages/CourseCard";
import coursesImg from "../assets/images/course.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";

const courses = [
  { image: coursesImg, title: "Madhurya Kadambini", duration: "Ongoing", language: ["Bhakti, Hindi"], price: "400", originalPrice: "1400", startDate: "May 23" },
  { image: coursesImg, title: "Madhurya Kadambini", duration: "Self-paced", language: ["Bhakti"], price: "400", originalPrice: "1400", startDate: "May 23" },
  { image: coursesImg, title: "Prabhupada", duration: "Upcoming", language: ["Bhakti English"], price: "Free", originalPrice: "1400", startDate: "May 23" },
  { image: coursesImg, title: "Bhagavad Gita", duration: "Past", language: ["Philosophy"], price: "500", originalPrice: "1500", startDate: "May 23" },
  { image: coursesImg, title: "Yoga and Meditation", duration: "Past", language: ["Wellness"], price: "300", originalPrice: "1400", startDate: "May 23" },
  { image: coursesImg, title: "Sanskrit Basics", duration: "Upcoming", language: ["Bhakti English"], price: "Free", originalPrice: "1400", startDate: "May 23" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1, dots: true, arrows: false } },
  ],
};

const Courses = () => {
  const sliderRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "#f1f5f8",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={{ xs: 5, sm: 8, md: 6 }} pt={{ xs: 2, sm: 2, md: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={1} sx={{ flexWrap: "wrap" }}>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 50, height: 2, bgcolor: theme.palette.primary.main }} />
          <Typography
            variant={isMobile ? "h5" : "h3"}
            component="h2"
            sx={{ fontWeight: 600, textAlign: "center", fontFamily: "Roboto", }}
          >
            Our <Box component="span" sx={{ color: theme.palette.primary.main }}>Courses</Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 50, height: 2, bgcolor: theme.palette.primary.main }} />
        </Stack>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#222",
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: { xs: 12, sm: 16 },
          }}
        >
          Learn as never before
        </Typography>
      </Box>

      {/* Slider */}
      <Box position="relative" px={{ xs: 0, sm: 2, md: 4 }}>
        <Slider ref={sliderRef} {...settings}>
          {courses.map((course, index) => (
            <Box key={index} px={{ xs: 1, sm: 2 }}>
              <CourseCard {...course} />
            </Box>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        {!isMobile && (
          <Stack direction="row" justifyContent="center" spacing={2} mt={4}>
            <Button variant="outlined" onClick={() => sliderRef.current.slickPrev()}>
              Prev
            </Button>
            <Button variant="outlined" onClick={() => sliderRef.current.slickNext()}>
              Next
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Courses;
