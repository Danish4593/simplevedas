import React from 'react';
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

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a237e', // Deep blue background
        color: 'white',
        py: 6,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
            <Divider
              sx={{
                backgroundColor: '#ff9800',
                height: 3,
                width: 40,
                mb: 3
              }}
            />
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                p: 2,
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Phone mockup with app interface */}
              <Box
                sx={{
                  width: '120px',
                  height: '240px',
                  backgroundColor: '#333',
                  borderRadius: '15px',
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid #333'
                }}
              >
                {/* App screen content */}
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    height: '100%',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '8px'
                  }}
                >
                  <Box sx={{ 
                    backgroundColor: '#ff9800', 
                    width: '80px', 
                    height: '20px', 
                    borderRadius: '10px',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '6px',
                    fontWeight: 'bold'
                  }}>
                    SIMPLE VEDAS
                  </Box>
                  <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#ff9800', textAlign: 'center' }}>
                    The wait is over!
                  </Typography>
                  <Typography sx={{ fontSize: '6px', color: '#666', textAlign: 'center', mt: 1 }}>
                    Download our new mobile application by scanning the QR code below
                  </Typography>
                </Box>
              </Box>
              
              {/* QR Code */}
              <Box
                sx={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#000',
                  borderRadius: 1,
                  margin: '10px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px'
                }}
              >
                ⬛
              </Box>
              
              {/* App Store Buttons */}
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
                <Box
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  🍎 App Store
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  📱 Google Play
                </Box>
              </Box>
            </Box>
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
                Simple Vedas, Radha Giridhari Mandira, Bhaktivedanta Swami Marg, Mira Road, Thane, Maharashtra – 401107
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

        {/* Bottom Section with Copyright and Social Links */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem'
              }}
            >
              Simple Vedas © 2025 All Rights Reserved
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[
                'Privacy Policy',
                'Refund Policy',
                'Terms & Conditions',
                'Shipping Policy'
              ].map((policy, index, arr) => (
                <React.Fragment key={policy}>
                  <Link
                    href="#"
                    sx={{
                      color: '#ff9800',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {policy}
                  </Link>
                  {index < arr.length - 1 && (
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>|</Typography>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }
              }}
            >
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Floating Contact Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000
        }}
      >
        <IconButton
          sx={{
            backgroundColor: '#ff5722',
            color: 'white',
            width: 60,
            height: 60,
            '&:hover': {
              backgroundColor: '#d84315'
            },
            boxShadow: '0 4px 12px rgba(255, 87, 34, 0.4)'
          }}
        >
          <Phone />
        </IconButton>
        <Typography
          sx={{
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '10px',
            color: 'white',
            backgroundColor: '#ff5722',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            whiteSpace: 'nowrap'
          }}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;