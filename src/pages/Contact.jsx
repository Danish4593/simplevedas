import { Box, Container, Typography, TextField, Button, styled } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from 'react';
import abouth from '../assets/images/abouth.jpg';
import NewsLetter from './NewsLetter';
import PageHeader from './PageHeader';


// Styled Components
const PageWrapper = styled(Box)({
  padding: '3rem 0',
  backgroundColor: '#fff',
  minHeight: '100vh'
});

const ContentBox = styled(Box)({
  padding: '2.5rem 2rem',
  backgroundColor: '#fff',
  '@media (min-width: 960px)': {
    padding: '2.5rem'
  }
});

const SectionTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '0.5rem',
  '& h2': {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#000',
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '2rem'
    }
  },
  '& span': {
    color: '#f4a624'
  },
  '&::after': {
    content: '""',
    flex: 1,
    height: '4px',
    backgroundColor: '#f4a624',
    maxWidth: '100px'
  }
});

const Subtitle = styled(Typography)({
  marginBottom: '2.5rem',
  marginTop: '0.5rem',
  color: '#000',
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '0.85rem',
  letterSpacing: '1px'
});

const ContactItem = styled(Box)({
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.2rem',
  '& .MuiSvgIcon-root': {
    fontSize: 42,
    color: '#000'
  }
});

const Divider = styled(Box)({
  borderBottom: '2px dotted #ddd',
  margin: '1.2rem 0'
});

const StyledTextField = styled(TextField)({
  backgroundColor: '#fff',
  '& .MuiOutlinedInput-root': {
    fontSize: '1rem',
    '& fieldset': {
      borderColor: '#e0e0e0'
    },
    '&:hover fieldset': {
      borderColor: '#f4a624'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f4a624'
    }
  },
  '& .MuiInputBase-input': {
    padding: '16px 14px'
  },
  '& .MuiInputBase-inputMultiline': {
    padding: '16px 14px'
  },
  '& .MuiInputLabel-root': {
    color: '#666',
    fontWeight: 600,
    fontSize: '1rem',
    '&.Mui-focused': {
      color: '#f4a624'
    }
  },
  '& input::placeholder, & textarea::placeholder': {
    color: '#666',
    opacity: 1,
    fontWeight: 600
  }
});

const SubmitButton = styled(Button)({
  backgroundColor: '#f4a624',
  color: '#8B0000',
  fontWeight: 700,
  fontSize: '1.3rem',
  padding: '14px',
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#e09615'
  }
});


const contactData = [
  { icon: PhoneOutlinedIcon, title: 'Phone', content: '+919987318251' },
  { icon: EmailOutlinedIcon, title: 'Email', content: 'contact@simplevedas.com' },
  { 
    icon: AccessTimeOutlinedIcon, 
    title: 'Timings', 
    content: ['Mon – Fri: 10 am to 7 pm', 'Sat – Sun: 10 am to 3 pm'] 
  },
  { 
    icon: LocationOnOutlinedIcon, 
    title: 'Address', 
    content: 'Radha Giridhari Mandira, Bhaktivedanta Swami Marg, Srishti Sector 2, Mira Road, Thane, MH 401107' 
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <PageHeader backgroundImage={abouth} title="Contact Us" />

    <PageWrapper>
      
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <ContentBox sx={{ height: '100%' }}>
              <SectionTitle>
                <h2>Contact <span>Info</span></h2>
              </SectionTitle>
              <Subtitle>WE ARE GLAD TO HAVE YOU AROUND</Subtitle>

              {contactData.map((item, index) => (
                <Box key={index}>
                  <ContactItem>
                    <item.icon />
                    <Box>
                      <Typography variant="h6" fontWeight={600} mb={0.3} fontSize="1.1rem">
                        {item.title}
                      </Typography>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <Typography key={i} variant="body1" color="#333">
                            {line}
                          </Typography>
                        ))
                      ) : (
                        <Typography variant="body1" color="#333" lineHeight={1.6}>
                          {item.content}
                        </Typography>
                      )}
                    </Box>
                  </ContactItem>
                  {index < contactData.length - 1 && <Divider />}
                </Box>
              ))}
            </ContentBox>
          </Box>

          {/* Enquiry Form */}
          <Box sx={{ flex: 1 }}>
            <ContentBox sx={{ height: '100%' }}>
              <SectionTitle>
                <h2>Enquiry <span>Form</span></h2>
              </SectionTitle>
              <Subtitle>GET IN TOUCH</Subtitle>

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <StyledTextField
                    fullWidth
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <StyledTextField
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <StyledTextField
                    fullWidth
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <StyledTextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Box>
                
                <Box sx={{ marginBottom: '1.5rem' }}>
                  <StyledTextField
                    fullWidth
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                  />
                </Box>
                
                <Box>
                  <SubmitButton type="submit" fullWidth variant="contained">
                    Submit
                  </SubmitButton>
                </Box>
              </form>
            </ContentBox>
          </Box>
        </Box>

        {/* Google Maps Section */}
        <Box sx={{ mt: 4 }}>
          <ContentBox sx={{ padding: 0, overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d72.8629!3d19.2812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE2JzUyLjMiTiA3MsKwNTEnNDYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </ContentBox>
        </Box>
      </Container>
    </PageWrapper>
    <NewsLetter />
    </>
  );
}