import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function BannerElephant() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: 100,
        background: "linear-gradient(135deg, #f4b942 0%, #f39c54 50%, #f28e65 100%)",
        px: { xs: 2, md: 2 },
        py: { xs: 5, md: 5 },
      }}
    >
      {/* Rope Border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          borderTop: "3px solid #8b5a1e",
          background: "repeating-linear-gradient(45deg, #d4841f, #d4841f 10px, #f39c54 10px, #f39c54 20px, #8b5a1e 20px, #8b5a1e 30px)",
          marginTop: 10
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          position: "relative",
          zIndex: 5,
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 300,
              letterSpacing: { xs: 4, md: 8 },
              mb: 2,
              textTransform: "uppercase",
              fontSize: 18
            }}
          >
            CONTACT
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              gap: 1,
              fontSize: 14,
              color: "white",
            }}
          >
            <Link href="#" sx={{ color: "white", textDecoration: "none", "&:hover": { opacity: 0.8 } }}>HOME</Link>
            <Box sx={{
              width: 20, height: 20, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#f39c54"
            }}>⊙</Box>
            <Typography>Contact</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
