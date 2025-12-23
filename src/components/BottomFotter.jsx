import {
  Box,
  Typography,
  Link,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Instagram,
  YouTube
} from '@mui/icons-material';
import React from 'react';

export default function BottomFooter() {
  return (
    <Box
      sx={{
        mt: 4,
        py: { xs: 1, md: 1.8 },
        px: 32,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
        backgroundColor: 'rgba(2, 19, 49)'
      }}
    >
      {/* Left: text + policy links */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', minWidth: 0 }}>
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
        >
          <Box component="span" sx={{ fontWeight: 700, mr: 1 }}>Simple Vedas</Box>
          <Box component="span" sx={{ color: 'rgba(247,194,26,0.95)', mx: 1 }}>© 2025 All Rights Reserved</Box>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          {[
            'Privacy Policy',
            'Refund Policy',
            'Terms & Conditions',
            'Shipping Policy'
          ].map((policy, index, arr) => (
            <React.Fragment key={policy}>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: index === 3 ? "rgba(247,194,26,0.95)" : '#d96608ff',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {policy}
              </Link>
              {index < arr.length - 1 && (
                <Typography sx={{ color: 'rgba(255,255,255,0.45)' }}>|</Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Right: social icons in square tiles */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {[
          { Icon: Facebook, label: 'facebook' },
          { Icon: Instagram, label: 'instagram' },
          { Icon: YouTube, label: 'youtube' }
        ].map(({ Icon, label }, i) => (
          <IconButton
            key={label}
            aria-label={label}
            sx={{
              width: 48,
              height: 48,
              backgroundColor: 'rgba(2, 24, 68)',
              color: '#ffffff',
              borderRadius: 1,
              boxShadow: '0 6px 18px rgba(3,18,40,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
              '&:hover': { backgroundColor: '#08304b' }
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
