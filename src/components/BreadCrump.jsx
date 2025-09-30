import React from "react";
import { Box, Typography, Link } from "@mui/material";
import breadCrumpImage from "../assets/images/breadcrump.jpg";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function BreadCrump() {
  return (
  <Box sx={{ position: 'relative', width: '100%' }}>
        <img 
          src={breadCrumpImage} 
          alt="Contact Banner"
        />
        
        {/* Text Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            transform: 'translateY(-50%)',
            textAlign: 'right',
            color: 'white',
            zIndex: 10
          }}
        >
          {/* CONTACT Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 300,
              margin: '0 0 10px 0',
              textTransform: 'uppercase',
            }}
          >
            CONTACT
          </Typography>
          
          {/* Breadcrumb */}
          <Box
            sx={{
              fontSize: { xs: '12px', md: '14px' },
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 1
            }}
          >
            <Typography component="span" sx={{ fontSize: 'inherit' }}>
              HOME
            </Typography>
            
            {/* Circle Arrow */}
                <ArrowCircleRightIcon/>
            
            <Typography component="span" sx={{ fontSize: '17px' }}>
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>
  );
}
