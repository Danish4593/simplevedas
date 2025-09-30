import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactInfo() {
    return(
       <Box sx={{ pr: { md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, fontSize:"45px" }}>
        Contact <span style={{ color: '#fbbf24' }}>Info</span>
      </Typography>
      <Divider
        sx={{
          width: 60,
          borderBottomWidth: 3,
          bgcolor: '#fbbf24',
          mb: 2,
        }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        WE ARE GLAD TO HAVE YOU AROUND
      </Typography>

      {/* Phone */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <PhoneIcon sx={{ mr: 2, mt: 0.5 }} />
        <Box>
          <Typography fontWeight="bold">Phone</Typography>
          <Typography>+919987318251</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2,  borderStyle : 'dashed'}} />

      {/* Email */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <EmailIcon sx={{ mr: 2, mt: 0.5 }} />
        <Box>
          <Typography fontWeight="bold">Email</Typography>
          <Typography>contact@simplevedas.com</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 ,  borderStyle : 'dashed'}} />

      {/* Timings */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <AccessTimeIcon sx={{ mr: 2, mt: 0.5 }} />
        <Box>
          <Typography fontWeight="bold">Timings</Typography>
          <Typography>Mon – Fri: 10 am to 7 pm</Typography>
          <Typography>Sat – Sun: 10 am to 3 pm</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2,  borderStyle : 'dashed' }} />

      {/* Address */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <LocationOnIcon sx={{ mr: 2, mt: 0.5 }} />
        <Box>
          <Typography fontWeight="bold">Address</Typography>
          <Typography>
            Radha Giridhari Mandira, Bhaktivedanta Swami Marg, Srishti Sector 2, Mira Road, Thane, MH 401107
          </Typography>
        </Box>
      </Box>
    </Box>
    )
}