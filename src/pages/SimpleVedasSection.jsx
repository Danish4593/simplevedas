import React from 'react';
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';

// Icons
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import backgroundImage from '../assets/images/questionaris.webp';

const SimpleVedasSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: '#2b2c2e',
          mb: { xs: 4, md: 6 },
        }}
      >
        Why Simple Vedas?
      </Typography>

      {/* Grid */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="center"
        maxWidth="lg"
        sx={{ margin: '0 auto' }}
      >
        {featureBoxes.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#fbc02d',
                p: { xs: 2.5, sm: 3 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderRadius: 2,
                textAlign: 'left',
                width: { xs: 260, sm: 280, md: 300 }, // 👈 fixed width
                height: { xs: 200, sm: 220, md: 240 }, // 👈 fixed height (same as width)
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#fff',
                  '& .icon': { color: '#fbc02d' },
                  '& .underline': { backgroundColor: '#fbc02d' },
                },
              }}
            >
              {/* Icon + Title */}
              <Box>
                <Box
                  className="icon"
                  sx={{
                    mb: 1.5,
                    color: '#2b2c2e',
                    transition: 'color 0.3s ease',
                    fontSize: { xs: 35, md: 40 },
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    color: '#2b2c2e',
                    fontWeight: 'bold',
                    mb: 0.5,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                  }}
                >
                  {feature.title}
                </Typography>

                <Box
                  className="underline"
                  sx={{
                    width: 40,
                    height: 2,
                    backgroundColor: '#2b2c2e',
                    mb: 2,
                    transition: 'background-color 0.3s ease',
                  }}
                />
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: '#2b2c2e',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  mt: 'auto',
                }}
              >
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