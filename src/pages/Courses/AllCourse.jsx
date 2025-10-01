import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Select,
  MenuItem,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export default function AllCourse(){

    const courses = [
  {
    id: 1,
    title: 'माधुर्य कादम्बिनी',
    image: 'https://images.unsplash.com/photo-1604504549490-ae0e50e0b14e?w=800&auto=format&fit=crop',
    tags: ['Bhakti'],
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'भक्ति शास्त्री (2025) B1',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
    tags: ['Bhakti', 'Philosophy'],
    status: 'ongoing'
  },
    {
    id: 2,
    title: 'भक्ति शास्त्री (2025) B1',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
    tags: ['Bhakti', 'Philosophy'],
    status: 'ongoing'
  },
   {
    id: 2,
    title: 'भक्ति शास्त्री (2025) B1',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
    tags: ['Bhakti', 'Philosophy'],
    status: 'ongoing'
  },
];



 return(
    <Container sx={{ margin: "45px"}}>
      <Grid container spacing={2}>
        <Grid size={4}>
              <Grid  xs={12} md={3}>
              <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ 
                  borderBottom: '3px solid #f59e0b',
                  pb: 1,
                  mb: 2
                }}>
                  Status
                </Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ 
                  borderBottom: '3px solid #f59e0b',
                  pb: 1,
                  mb: 2
                }}>
                  Course Categories
                </Typography>
              </Paper>
            </Grid>
        </Grid>
  

        <Grid size={4}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6,
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="280"
                        image="/var/www/FreelanceProject/simplevedas/src/assets/images/course.png"
                        alt='title'
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                          {courses.map((course) => (
                            <Chip
                              key="title"
                              label="titke"
                              sx={{
                                bgcolor: '#f59e0b',
                                color: 'white',
                                fontWeight: 'bold',
                                '&:hover': {
                                  bgcolor: '#d97706',
                                }
                              }}
                            />
                          ))}
                        </Box>
                        <Typography variant="h6" component="h3" fontWeight="bold">
                      Tite
                        </Typography>
                      </CardContent>
                    </Card>
        </Grid>
       <Grid size={4}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6,
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="280"
                        image="/var/www/FreelanceProject/simplevedas/src/assets/images/course.png"
                        alt='title'
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                          {courses.map((course) => (
                            <Chip
                              key="title"
                              label="titke"
                              sx={{
                                bgcolor: '#f59e0b',
                                color: 'white',
                                fontWeight: 'bold',
                                '&:hover': {
                                  bgcolor: '#d97706',
                                }
                              }}
                            />
                          ))}
                        </Box>
                        <Typography variant="h6" component="h3" fontWeight="bold">
                      Tite
                        </Typography>
                      </CardContent>
                    </Card>
        </Grid>
      </Grid>
    </Container>
 )
}