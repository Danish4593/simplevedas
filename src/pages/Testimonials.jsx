import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { FiberManualRecord, FormatQuote as QuoteIcon } from '@mui/icons-material';

const testimonials = [
  {
    image: 'https://placehold.co/100x100/FDC13C/FFFFFF?text=Sailesh',
    name: 'Sailesh Kumar Gupta',
    title: 'Aircraft Maintenance Engineer | Abudhabi, UAE',
    quote:
      'The teaching and hand holding of the tutor has helped me improve the quality of my thought and action. I have attended the Gita Diploma Course, which turned out to be a stepping stone on the path of bhakti for me.',
  },
  {
    image: 'https://placehold.co/100x100/FDC13C/FFFFFF?text=Jane',
    name: 'Jane Doe',
    title: 'Software Engineer | San Francisco, USA',
    quote:
      'This course has completely changed my perspective on life. The practical lessons and guidance have been invaluable. I highly recommend it to anyone seeking spiritual growth.',
  },
  {
    image: 'https://placehold.co/100x100/FDC13C/FFFFFF?text=John',
    name: 'John Smith',
    title: 'Architect | London, UK',
    quote:
      'The structured approach to learning made complex topics easy to understand. The quizzes and assignments helped reinforce my knowledge. A truly enriching experience.',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const YellowColor = '#ffc13c';
  const DarkTextColor = '#333333';

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'white',
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 'lg', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 4, sm: 6 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: 48,
              height: 2,
              backgroundColor: YellowColor,
              mx: 2,
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: DarkTextColor,
              fontFamily: 'Roboto',
            }}
          >
            Hear it from{' '}
            <Box component="span" sx={{ color: YellowColor }}>
              Our Students
            </Box>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: 48,
              height: 2,
              backgroundColor: YellowColor,
              mx: 2,
            }}
          />
        </Box>

        {/* Slider */}
        <Box
          sx={{
            maxWidth: 'md',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 360, sm: 380, md: 420 },
          }}
        >
          {/* Sliding Wrapper */}
          <Box
            sx={{
              display: 'flex',
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`,
              transition: 'transform 1000ms ease-in-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                sx={{
                  flex: `0 0 ${100 / testimonials.length}%`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: { xs: 2, sm: 4 },
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: { xs: 80, sm: 96 },
                    height: { xs: 80, sm: 96 },
                    border: `4px solid ${YellowColor}`,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 0.5, color: DarkTextColor }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  {testimonial.title}
                </Typography>

                <QuoteIcon sx={{ width: 32, height: 32, color: 'grey.400', mb: 3 }} />

                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    color: 'grey.700',
                    lineHeight: 1.6,
                    maxWidth: 700,
                    fontStyle: 'italic',
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  }}
                >
                  {`"${testimonial.quote}"`}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, sm: 6 } }}>
          {testimonials.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => handleSlideChange(index)}
              size="small"
              sx={{
                p: 0.5,
                color: index === currentSlide ? YellowColor : 'grey.400',
                transition: 'color 300ms',
                '&:hover': { color: YellowColor },
              }}
            >
              <FiberManualRecord fontSize="small" />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;