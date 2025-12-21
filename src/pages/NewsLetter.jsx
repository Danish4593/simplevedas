import React from 'react';
import { Box, Typography, TextField, Button, Grid, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Using an icon for the button text

// Custom styled component for the TextField to match the desired look
const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(0.5),

  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: 0,

    '& input': {
      padding: '13px 16px',
      fontSize: '12px',
    },

    '& input::placeholder': {
      fontSize: '12px',
      opacity: 0.6,
    },

    /* 🔹 Default (not focused) border */
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#021844', // dark blue
    },

    /* 🔹 Hover state */
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#021844',
    },

    /* 🔹 Focused state */
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#021844',
      borderWidth: '2px',
    },
  },
}));


const NewsLetter = () => {
  const YellowColor = '#FFC13C';
  const DarkBlueColor = '#021844';

  // Function to handle form submission (e.g., prevent default behavior)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: YellowColor,
        py: 5, // Equivalent to py-12
        px: 10,
        transition: 'all 600ms',
        borderRadius: 1, // Slight rounding
        boxShadow: 3, // Standard Material-UI shadow
      }}
    >
      <Box sx={{ maxWidth: 'lg', margin: '0 auto' }}>
        <Grid container spacing={4} component="form" onSubmit={handleSubmit}>

          {/* Left column: Title */}
          {/* Left column: Title */}
          <Grid size={6} item xs={12} md={6}>
            <Typography
              component="h5"
              sx={{
                color: 'black',
                fontWeight: 400, // normal weight
                fontSize: 40,    // normal readable heading size
                lineHeight: 1.3,
                fontFamily: 'Roboto, sans-serif',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              Subscribe Newsletter
            </Typography>
          </Grid>

          {/* Right column: Input and Button */}
          <Grid size={6} item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
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
                  py: 2,
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