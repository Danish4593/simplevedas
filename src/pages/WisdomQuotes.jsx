import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

// Assuming these imports are local files and you'll update the paths later
import embaraceQuote from "../assets/images/embrace.jpg";
import faithQuote from "../assets/images/faith.png";
import relationshipQuote from "../assets/images/relationships.jpg";
import weaknessesQuote from "../assets/images/weekness.jpg";

const quotes = [
  {
    image: faithQuote,
    text: 'Faith, Faith, Faith...This one word covers the entire spiritual journey.',
    source: '(Based on Bhagavad Gita 9.3) - Madhusudana Visnu Das',
  },
  {
    image: embaraceQuote,
    text: 'If you really want to ask something from GOD, why ask for petty things of this world- WEALTH, POWER, BEAUTY, FAME and so on? Ask for something GREAT. Ask for a MEETING with the LORD. Ask for REUNION with Him. Ask for His EMBRACE.',
    source: '',
  },
  {
    image: weaknessesQuote,
    text: 'When our weaknesses get stronger than us, we need to cling for support to those who are Mentally and Spiritually stronger.',
    source: '- Madhusudana Visnu Das',
  },
  {
    image: relationshipQuote,
    text: 'Genuine Relationships are supported by the Pillars of Responsibility, not Recreation.',
    source: 'Based on Bhagavad-gita 18.38',
  },
];

const WisdomQuotes = () => {
  const YellowColor = '#ffc13c';
  const BackgroundColor = '#f1f5f8'; // Light gray background
  const DarkTextColor = '#374151'; // Equivalent to gray-800

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: BackgroundColor,
        py: { xs: 8, md: 10 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 6 }, // Responsive horizontal padding
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: 'lg', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 4, sm: 6 },
            gap: 1, // Space between title and decorative lines
          }}
        >
          {/* Decorative Line Left */}
          <Box
            sx={{
              width: { xs: 40, sm: 48 }, // 10 and 12 units wide
              height: 3, // 0.5 h, using 3px for visibility
              backgroundColor: YellowColor,
              display: { xs: 'none', sm: 'block' }, // Hide line on extra-small screens
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: DarkTextColor,
            }}
          >
            Wisdom{' '}
            <Box component="span" sx={{ color: YellowColor }}>
              Quotes
            </Box>
          </Typography>
          {/* Decorative Line Right */}
          <Box
            sx={{
              width: { xs: 40, sm: 48 },
              height: 3,
              backgroundColor: YellowColor,
              display: { xs: 'none', sm: 'block' },
            }}
          />
        </Box>

        {/* Grid of Quotes (Image Cards) */}
        <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
          {quotes.map((quote, index) => (
            <Grid 
              item 
              xs={12}      // 1 column on extra-small
              sm={6}       // 2 columns on small
              md={4}       // 3 columns on medium (if there were 12 items)
              lg={3}       // 4 columns on large (for 4 items total)
              key={index}
            >
              <Card
                elevation={4} // Equivalent to a shadow-lg
                sx={{
                  position: 'relative',
                  borderRadius: 1, // Rounded corners
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb', // border-gray-200
                  cursor: 'pointer',
                  // Hover effect (scale-105)
                  transition: 'transform 300ms ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Stronger shadow on hover
                  },
                }}
              >
                {/* Image Media */}
                <CardMedia
                  component="img"
                  image={quote.image}
                  alt={`Quote ${index + 1}`}
                  sx={{
                    width: '100%',
                    // Responsive height for the image area
                    height: { xs: 224, sm: 256, md: 288, lg: 320 }, 
                    objectFit: 'cover',
                  }}
                />
                
                {/* Overlay Text/Quote (The original had no overlay text, but 
                    if you wanted to add it, this is where you'd put it) 
                
                // For now, we only render the image, matching the original code's output.
                */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WisdomQuotes;