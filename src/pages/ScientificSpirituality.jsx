import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import embaraceQuote from "../assets/images/embrace.jpg";
import faithQuote from "../assets/images/faith.png";
import relationshipQuote from "../assets/images/relationships.jpg";
import weaknessesQuote from "../assets/images/weekness.jpg";

const ScientificSpirituality = () => {
  const mediaContent = [
    {
      type: 'image',
      src: embaraceQuote,
      alt: 'Does God Exist?',
      title: '', // No title text overlaid
    },
    {
      type: 'image',
      src: faithQuote,
      alt: 'Goloka Vrindavan',
      title: 'Goloka Vrindavan',
      titleBgColor: '#fbc02d', // Yellow background for title
    },
    {
      type: 'image',
      src: relationshipQuote,
      alt: 'Sri Nrsimha Kavacha Mantra',
      title: 'Sri Nrsimha Kavacha Mantra',
      titlePosition: 'bottom', // Title at the bottom
    },
    {
      type: 'image',
      src: weaknessesQuote,
      alt: 'Mitra',
      title: 'मित्र', // Mitra text in Hindi
      titlePosition: 'bottom',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0b1c3f', // Dark blue background
        py: 8,
        px: { xs: 2, md: 8 }, // Responsive padding
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small, row on medium and up
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh', // Ensure enough height for the section
        gap: { xs: 4, md: 8 }, // Gap between text content and image grid
      }}
    >
      {/* Left Section: Text Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center', 
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          className='sprituality-h2'
          gutterBottom
          sx={{
            color: '#fbc02d', // Yellow color for the heading
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Scientific Spirituality
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            mb: 4,
          }}
        >
          Scientific study is not limited to the realm of material or physical. It is
          also equally valid, if not more, in the metaphysical and spiritual arena.
          At Simple Vedas, we learn the vast and rich Science of Spirituality.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#fbc02d', // Yellow button
            color: '#212121', // Dark text color
            '&:hover': {
              backgroundColor: '#e6a400', // Darker yellow on hover
            },
            fontWeight: 'bold',
            py: 1.5,
            px: 3,
            borderRadius: 0, // Sharp corners
            textTransform: 'none', // Keep original casing
          }}
        >
          Check our Video Gallery
        </Button>
      </Box>

      {/* Right Section: Image Grid */}
      <Box
        sx={{
          flexShrink: 0, // Prevent shrinking
          width: { xs: '100%', sm: 'auto' }, // Full width on small, auto on larger
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // 1 column on extra-small
            sm: 'repeat(2, 1fr)', // 2 columns on small and up
          },
          gap: 2, // Gap between grid items
          justifyContent: 'center',
        }}
      >
        {mediaContent.map((item, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              width: 250,
              height: 150,
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              backgroundColor: item.titleBgColor || 'transparent',
            }}
          >
            {item.type === 'image' && (
              <>
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.alt}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover', // Cover the card area
                  }}
                />
                {item.title && (
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'absolute',
                      // Position title based on titlePosition prop
                      ...(item.titlePosition === 'bottom'
                        ? { bottom: 0, left: 0 }
                        : { top: 0, left: 0 }),
                      width: '100%',
                      p: 1,
                      backgroundColor: item.titleBgColor || 'rgba(0,0,0,0.5)', // Default dark overlay
                      color: item.titleBgColor ? '#212121' : 'white', // Dark text on yellow, white on dark
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.title}
                  </Typography>
                )}
              </>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ScientificSpirituality;