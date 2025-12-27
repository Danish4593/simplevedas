import React from 'react';
import downloadAppImage from "../assets/images/app.webp";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Divider
} from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import BottomFooter from "../components/BottomFotter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#031B4E', 
        color: '#FFFFFF',
        pt: 7,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* ABOUT US */}
          <Grid item xs={12} md={3} width={"25%"}>
            <Typography sx={headingStyle}>About Us</Typography>
            <Divider sx={dividerStyle} />

            <Typography sx={bodyText}>
              Simple Vedas is an initiative to make the ancient spiritual
              techniques given in the Vedas available to the modern world in a
              way that it is relevant, practical, simple and authentic.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                textTransform: 'none',
                px: 4,
                py: 1,
                fontSize: '14px',
                borderRadius: '2px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: '#FFFFFF'
                }
              }}
            >
              Read More
            </Button>
          </Grid>

          {/* USEFUL LINKS + WHATSAPP */}
          <Grid item xs={12} md={3}>
            <Typography sx={headingStyle}>Useful Links</Typography>
            <Divider sx={[dividerStyle,{mb:5}]} />

            <Grid container spacing={1}>
              <Grid item xs={6}>
                {['Home', 'About', 'Quotes'].map(link => (
                  <FooterLink key={link} label={link} />
                ))}
              </Grid>
              <Grid item xs={6} ml={7}>
                {['Courses', 'Shop', 'Events'].map(link => (
                  <FooterLink key={link} label={link} />
                ))}
              </Grid>
            </Grid>

            <Typography sx={{ ...headingStyle, mt: 4 }}>
              Join WhatsApp Community
            </Typography>
            <Divider sx={[dividerStyle,{mb:5}]} />

            {['Channel', 'Announcement Group'].map(item => (
              <Link
                key={item}
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'gray',
                  fontSize: '16px',
                  my: 2,
                  textDecoration: 'none',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                <WhatsApp sx={{ fontSize: 16, color: '#F6B221' }} />
                {item}
              </Link>
            ))}
          </Grid>

          {/* DOWNLOAD APP */}
          <Grid item xs={12} md={3}>
            <Typography sx={headingStyle}>Download our App!</Typography>
            <Divider sx={dividerStyle} />

            <Box sx={{ mt: 2 }}>
              <img
                src={downloadAppImage}
                alt="Download App"
                style={{
                  width: '100%',
                  maxWidth: 240,
                  display: 'block'
                }}
              />
            </Box>
          </Grid>

          {/* CONTACT US */}
          <Grid item xs={12} md={3}>
            <Typography sx={headingStyle}>Contact Us</Typography>
            <Divider sx={dividerStyle} />

            <Typography sx={subHeading}>Address</Typography>
            <Typography sx={bodyText}>
              Simple Vedas, Radha Giridhari Mandira,<br />
              Bhaktivedanta Swami Marg, Mira Road,<br />
              Thane, Maharashtra – 401107
            </Typography>

            <Typography sx={{ ...subHeading, mt: 3 }}>Phone</Typography>
            <Typography sx={bodyText}>+91 9987318251</Typography>

            <Typography sx={{ ...subHeading, mt: 3 }}>Email</Typography>
            <Typography sx={bodyText}>contact@simplevedas.com</Typography>
          </Grid>

        </Grid>
      </Container>

      <BottomFooter />
    </Box>
  );
};

/* ---------- Shared Styles ---------- */

const headingStyle = {
  fontSize: '18px',
  fontWeight: 500,
  mb: 1.5,
  fontFamily: 'Roboto, sans-serif'
};

const subHeading = {
  fontSize: '18px',
  mb: 1,
  fontFamily: 'Roboto, sans-serif'
};

const bodyText = {
  fontSize: '15px',
  color: 'gray',
  lineHeight: 2,
  fontFamily: '"Open Sans", sans-serif'
};

const dividerStyle = {
  width: 36,
  height: 3,
  backgroundColor: '#F6B221',
  mb: 3
};

const FooterLink = ({ label }) => (
  <Link
    href="#"
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: 'gray',
      fontSize: '16px',
      mb: 1.5,
      textDecoration: 'none',
      '&:hover': { color: '#FFFFFF' },
      '&::before': {
        content: '"›"',
        color: '#F6B221',
        mr: 1
      }
    }}
  >
    {label}
  </Link>
);

export default Footer;
