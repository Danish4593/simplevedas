import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

// Assuming these imports are local files and you'll update the paths later
import embaraceQuote from "../assets/images/embrace.jpg";
import faithQuote from "../assets/images/faith.png";
import relationshipQuote from "../assets/images/relationships.jpg";
import weaknessesQuote from "../assets/images/weekness.jpg";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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

        <Grid container spacing={4}>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[0].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[1].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[2].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[0].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WisdomQuotes;