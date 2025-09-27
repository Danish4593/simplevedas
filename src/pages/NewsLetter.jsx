import React from 'react';
import { Box, Typography, TextField, Button, Grid, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Using an icon for the button text

// Custom styled component for the TextField to match the desired look
const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: 1, // Allows the input to take up maximum available space
  marginRight: theme.spacing(0.5), // Equivalent to mx-[2px] on the left side
  
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '5px', // Rounded corners for the input field
    padding: 0, // Remove default padding that interferes with height
    
    // Style the input element itself (to control height/padding)
    '& input': {
      padding: '10px 16px', // Control inner padding (py-2 px-4)
      height: 'auto', // Ensure height is controlled by padding
    },
    
    // Focus state (focus:ring-2 focus:ring-black)
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
      borderWidth: '2px',
      boxShadow: `0 0 0 2px ${theme.palette.common.black}`, // Mimic focus ring
    },
    
    // Ensure the border remains standard when not focused
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300], // Border color
    },
  },
}));

const NewsLetter = () => {
  const YellowColor = '#FFC13C';
  const DarkBlueColor = '#021844';

  // Function to handle form submission (e.g., prevent default behavior)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for sending the email address goes here
    console.log('Newsletter submitted!');
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: YellowColor,
        py: 6, // Equivalent to py-12
        px: 2,
        transition: 'all 600ms',
        borderRadius: 1, // Slight rounding
        boxShadow: 3, // Standard Material-UI shadow
      }}
    >
      <Box sx={{ maxWidth: 'lg', margin: '0 auto' }}>
        <Grid container spacing={4} component="form" onSubmit={handleSubmit}>
          
          {/* Left column: Title */}
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                color: 'black',
                fontWeight: 300, // font-light
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8125rem' }, // 45px
                lineHeight: { xs: 1.2, md: '50px' },
                fontFamily: 'Roboto, sans-serif',
                mt: 0.5, // Small margin to align with input field vertically
              }}
            >
              Subscribe Newsletter
            </Typography>
          </Grid>
          
          {/* Right column: Input and Button */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                // Adjust margin to counteract the TextField's margin and align better
                mx: -0.5,
              }}
            >
              <StyledTextField
                placeholder="Enter E-mail address"
                variant="outlined"
                type="email"
                required
                // The marginRight is handled in the StyledTextField definition
              />
              
              <Button
                type="submit"
                variant="contained"
                // endIcon={<SendIcon sx={{ color: 'white' }} />} // Optional: Add icon if preferred
                sx={{
                  backgroundColor: DarkBlueColor,
                  color: 'white',
                  px: 4, // Equivalent to px-8
                  py: 1,
                  borderRadius: '5px', // 5px rounding
                  ml: 0.5, // Equivalent to mx-[2px] on the right side
                  height: '42px', // Match the height of the text field
                  fontSize: '1rem',
                  fontWeight: 300,
                  transition: 'background-color 300ms',
                  '&:hover': {
                    backgroundColor: 'grey.800', // Hover background
                  },
                  // Overriding default MUI styles to achieve desired look
                  minWidth: 'auto',
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsLetter;