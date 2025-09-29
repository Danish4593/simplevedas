import React from 'react';
import { BookOpen, GraduationCap, Globe, Feather } from 'lucide-react';
import { Box, Paper, Grid, Typography, Container } from '@mui/material';

const StatsSection = () => {
  const stats = [
    {
      icon: BookOpen,
      number: '20+',
      label: 'COMPLETE COURSES'
    },
    {
      icon: GraduationCap,
      number: '12966+',
      label: 'STUDENTS ENROLLED'
    },
    {
      icon: Globe,
      number: '22+',
      label: 'COUNTRIES REACHED'
    },
    {
      icon: Feather,
      number: '1095+',
      label: 'DAYS OF SERVICE'
    }
  ];

  return (
    <Box>
        <Grid container spacing={4}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    bgcolor: 'white',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: '#f5f5f5',
                      color: '#1976d2',
                      mb: 2
                    }}
                  >
                    <Icon size={48} strokeWidth={1.5} />
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 3,
                      bgcolor: '#FFC107',
                      margin: '0 auto 16px'
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: '#333'
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontWeight: 500,
                      letterSpacing: '0.5px'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
    </Box>
  );
};

export default StatsSection;