import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import HoverRating from "../components/Rating.jsx"

const CourseCard = ({
  image,
  headline,
  subheadline,
  title,
  startDate,
  duration,
  language,
  description,
  price,
  onViewDetails,
  onRegister,
  originalPrice,
}) => {
  return (
    <Card
      sx={{
        width: 330,
        borderRadius: 4,
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Image with overlay text */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            {headline}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              mt: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              px: 1.5,
              py: 0.3,
              borderRadius: 1,
              color: "#ffeb3b",
              fontWeight: 500,
              textShadow: "0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            {subheadline}
          </Typography>

          <Box
            component="span"
            sx={{
              mt: 1,
              fontSize: 20,
              color: "#fff",
            }}
          >
            ▼
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 2 }}>
        {/* Title */}
        <Typography
          variant="h6"
          fontWeight={600}
          color="text.primary"
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
        <Stack spacing={1.5}>
          <HoverRating />
        </Stack>
        {/* Info Row */}
        <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
          <Chip
            icon={<CalendarMonthIcon />}
            label={startDate}
            size="small"
            sx={{ background: "#f5f5f5" }}
          />
          <Chip
            icon={<AccessTimeIcon />}
            label={duration}
            size="small"
            sx={{ background: "#f5f5f5" }}
          />
          <Chip
            icon={<LanguageIcon />}
            label={language}
            size="small"
            sx={{ background: "#f5f5f5" }}
          />
        </Stack>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" mb={2}>
          Learn yoga philosophy, asanas and meditations to take charge of your joy!
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={1.5}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "text.secondary" }}
            >
              ₹{price}
            </Typography>
            <Typography variant="body1" fontWeight={600} >
              ₹{originalPrice}
            </Typography>
          </Stack>

          <Button
            variant="outlined"
            onClick={onViewDetails}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              flex: 1,
              fontWeight: 500,
              color: "text.primary",
              "&:hover": { backgroundColor: "#ffc13c", color: "text.primary" },
            }}
          >
            Details
          </Button>
          <Button
            variant="outlined"
            onClick={onRegister}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              flex: 1,
              color: "text.primary",
              "&:hover": { backgroundColor: "#ffc13c", color: "text.primary" },
            }}
          >
            Register
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
