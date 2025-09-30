import React from 'react';
import { BookOpen, GraduationCap, Globe, Feather } from 'lucide-react';
import { Box, Paper, Grid, Typography, Container } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import CreateIcon from '@mui/icons-material/Create';

export default function StatsSection() {
  const stats = [
    {
      icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
      number: '20+',
      label: 'COMPLETE COURSES'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      number: '12966+',
      label: 'STUDENTS ENROLLED'
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40 }} />,
      number: '22+',
      label: 'COUNTRIES REACHED'
    },
    {
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      number: '1095+',
      label: 'DAYS OF SERVICE'
    }
  ];

  return (
        <Grid container spacing={4} sx={{marginBottom : "25px"}}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} size={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  '&:not(:last-child)::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '80%',
                    width: '1px',
                    backgroundColor: '#e0e0e0',
                    display: { xs: 'none', md: 'block' }
                  }
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    color: '#333',
                    mb: 2
                  }}
                >
                  {stat.icon}
                </Box>

                {/* Yellow underline */}
                <Box
                  sx={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#FDB54A',
                    mb: 2
                  }}
                />

                {/* Number */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '32px', md: '42px' },
                    fontWeight: 400,
                    color: '#333',
                    mb: 1,
                    lineHeight: 1.2
                  }}
                >
                  {stat.number}
                </Typography>

                {/* Label */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '12px', md: '13px' },
                    fontWeight: 500,
                    color: '#666',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
  );
}
