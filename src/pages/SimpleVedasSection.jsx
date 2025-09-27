import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
// Importing icons that match the visual representation
import SchoolIcon from '@mui/icons-material/SchoolOutlined'; // Systematic (Cap)
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Quiz (?)
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Free Learning (Heart)
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; // Practical (Lightbulb)
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; // 4 Levels (List/Hamburger)
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'; // Pace (Hourglass)

const SimpleVedasSection = () => {
  const featureBoxes = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Systematic',
      description: 'Our courses are well-designed and extremely structured.',
    },
    {
      icon: <HelpOutlineIcon sx={{ fontSize: 40 }} />,
      title: 'Quiz',
      description: 'We not only teach you, but also make sure you learn.',
    },
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 40 }} />,
      title: 'Free Learning',
      description: 'Except a few, all our courses are either free or minimally charged.',
    },
    {
      icon: <LightbulbOutlinedIcon sx={{ fontSize: 40 }} />,
      title: 'Practical',
      description: 'Knowledge is of true value only when theory is turned into practical.',
    },
    {
      icon: <FormatListBulletedIcon sx={{ fontSize: 40 }} />,
      title: '4 Levels',
      description: 'Basic (Level 1) to Pro (Level 4) levels of learning the subjects.',
    },
    {
      icon: <HourglassEmptyIcon sx={{ fontSize: 40 }} />,
      title: 'Pace',
      description: 'You decide the pace at which you are comfortable to learn.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#2b2c2e', // Dark background
        py: 8, // Vertical padding
        px: 2, // Horizontal padding
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          color: 'white', 
          mb: 6, 
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Why Simple Vedas?
      </Typography>

      <Grid container spacing={3} justifyContent="center" maxWidth="lg">
        {featureBoxes.map((feature, index) => (
          <Grid 
            item 
            xs={12} // Full width on extra-small (mobile)
            sm={6}  // Half width on small (tablet) and up, FORCING 2 COLUMNS
            key={index}
          >
            <Paper
              elevation={0} 
              sx={{
                backgroundColor: '#fbc02d', // Yellow background
                p: 3,
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: 0, // Sharp corners
              }}
            >
              <Box sx={{ mb: 1.5, color: '#2b2c2e' }}>{feature.icon}</Box>
              <Typography variant="h6" component="h3" sx={{ color: '#2b2c2e', fontWeight: 'bold', mb: 0.5 }}>
                {feature.title}
              </Typography>
              {/* The short underline separator */}
              <Box sx={{ width: '40px', height: '2px', backgroundColor: '#2b2c2e', mb: 2 }} /> 
              <Typography variant="body2" sx={{ color: '#2b2c2e' }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimpleVedasSection;