import React from 'react';
import downloadAppImage from "../assets/images/app.webp"
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  IconButton,
  Divider
} from '@mui/material';
import {
  Facebook,
  Instagram,
  YouTube,
  WhatsApp,
  Phone,
  Email,
  LocationOn
} from '@mui/icons-material';
import BottomFooter from "../components/BottomFotter"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#021844', // Deep blue background
        color: 'white',
        py: 6,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid size={3} item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              About Us
            </Typography>
            <Divider
              sx={{
                backgroundColor: '#ff9800',
                height: 3,
                width: 40,
                mb: 3
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                mb: 3,
                fontSize: '0.875rem'
              }}
            >
              Simple Vedas is an initiative to make the ancient spiritual techniques given in the Vedas available to the modern world in a way that it is relevant, practical, simple and authentic.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.5)',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.875rem',
                px: 3,
                py: 1,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Read More
            </Button>
          </Grid>

          {/* Useful Links Section */}
          <Grid size={3} item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              Useful Links
            </Typography>
            <Divider
              sx={{
                backgroundColor: '#ff9800',
                height: 3,
                width: 40,
                mb: 3
              }}
            />
            <Grid container spacing={2}>
              <Grid size={3} item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Home', 'About', 'Quotes'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                          color: 'white'
                        },
                        '&:before': {
                          content: '"❯"',
                          marginRight: 1,
                          color: '#ff9800'
                        }
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Grid>
              <Grid size={3} item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Courses', 'Shop', 'Events'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                          color: 'white'
                        },
                        '&:before': {
                          content: '"❯"',
                          marginRight: 1,
                          color: '#ff9800'
                        }
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Grid>
            </Grid>
            
            {/* WhatsApp Community Section */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mt: 4,
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              Join WhatsApp Community
            </Typography>
            <Divider
              sx={{
                backgroundColor: '#ff9800',
                height: 3,
                width: 40,
                mb: 3
              }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Channel', 'Announcement Group'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                >
                  <WhatsApp sx={{ mr: 1, fontSize: '1rem' }} />
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Download App Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              Download our App!
           
            </Typography>
                <img
                      src={downloadAppImage}
              
                  />
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              Contact Us
            </Typography>
            <Divider
              sx={{
                backgroundColor: '#ff9800',
                height: 3,
                width: 40,
                mb: 3
              }}
            />
            
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '0.875rem'
                }}
              >
                Simple Vedas, Radha Giridhari Mandira
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Phone
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem'
                }}
              >
                +91 9987318251
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Email
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem'
                }}
              >
                contact@simplevedas.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

                <></>
      </Container>
      <BottomFooter/>
      {/* Floating Contact Button */}
    </Box>
  );
};

export default Footer;