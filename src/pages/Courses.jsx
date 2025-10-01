import { useRef } from "react";
import Slider from "react-slick";
import { CourseCard } from "../index"; 
import coursesImg from "../assets/images/course.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography, Button, Stack, useTheme } from "@mui/material";

const courses = [
  { image: coursesImg, title: "Madhurya Kadambini", duration: "17h", tags: ["Bhakti", "Hindi"], price: "₹400", originalPrice: "₹1400" },
  { image: coursesImg, title: "Madhurya Kadambini", duration: "20h", tags: ["Bhakti"], price: "₹400", originalPrice: "₹1400" },
  { image: coursesImg, title: "Prabhupada", duration: "22h", tags: ["Bhakti", "English"], price: "Free" },
  { image: coursesImg, title: "Bhagavad Gita", duration: "25h", tags: ["Philosophy"], price: "₹500", originalPrice: "₹1500" },
  { image: coursesImg, title: "Yoga and Meditation", duration: "15h", tags: ["Wellness"], price: "₹300" },
  { image: coursesImg, title: "Sanskrit Basics", duration: "10h", tags: ["Language", "Hindi"], price: "Free" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Courses = () => {
  const sliderRef = useRef();
  const theme = useTheme();

  return (  
    <Box sx={{ bgcolor: "#f1f5f8", py: 6, px: { xs: 2, sm: 6, lg: 12 }, minHeight: "100vh" }}>
      {/* Header */}
      <Box textAlign="center" mb={10} pt={10}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={2}>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 50, height: 2, bgcolor: theme.palette.primary.main }} />
          <Typography variant="h3" component="h2" sx={{ fontWeight: 600 }}>
            Our <Box component="span" sx={{ color: theme.palette.primary.main}}>Courses</Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 50, height: 2, bgcolor: theme.palette.primary.main }} />
        </Stack>
        <Typography variant="subtitle2" sx={{ color: "#222", letterSpacing: 2, mt: "6px", textTransform : 'uppercase', fontWeight : 300}}>
          Learn as never before
        </Typography>
      </Box>

      {/* Slider */}
      <Box position="relative" px={{ xs: 0, sm: 4 }}>
        <Slider ref={sliderRef} {...settings}>
          {courses.map((course, index) => (
            <Box key={index} px={1}>
              <CourseCard {...course} />
            </Box>
          ))}
        </Slider>

        {/* Prev & Next Buttons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={4}>
          <Button variant="outlined" onClick={() => sliderRef.current.slickPrev()}>
            Prev
          </Button>
          <Button variant="outlined" onClick={() => sliderRef.current.slickNext()}>
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Courses;
