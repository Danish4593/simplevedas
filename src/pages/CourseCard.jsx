
import { Card, CardMedia, CardContent, Typography, Chip, Box, Stack } from "@mui/material";

const CourseCard = ({ image, title, duration, tags, price, originalPrice }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={image} alt={title} sx={{ height: 200, objectFit: "cover", transition: "transform 0.3s", "&:hover": { transform: "scale(1.1)" } }} />
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <Box ml={0.5}>{duration}</Box>
        </Box>
      </Box>

      {/* Content */}
      <CardContent>
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {tags.map((tag, idx) => (
            <Chip key={idx} label={tag} size="small" color="warning" sx={{ cursor: "pointer" }} />
          ))}
        </Stack>

        <Typography variant="h6" gutterBottom>{title}</Typography>

        <Stack direction="row" spacing={1} alignItems="baseline">
          {originalPrice && <Typography variant="body2" sx={{ textDecoration: "line-through", color: "text.disabled" }}>{originalPrice}</Typography>}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>{price}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
