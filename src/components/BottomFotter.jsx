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
import React from 'react';


export default  function BottomFooter() {
    return (
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
             backgroundColor: '#021231'
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
    )
}