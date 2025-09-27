import guruJiImg from '../assets/images/guruji.png';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  Fab,
  useTheme,
  useMediaQuery
} from '@mui/material';


export default function WelcomeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center', 
          gap: 4,
          minHeight: '80vh'
        }}>
          {/* Left Side - Image and Logo */}
          <Box sx={{ 
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}>

            {/* Profile Card */}
            <Card sx={{ 
              width: 300, 
              height: 400, 
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative'
            }}>
              <CardMedia
                component="img"
                height="400"
                image={guruJiImg}
                alt="Guru Ji - Spiritual Guide"
                sx={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Card>
          </Box>

          {/* Right Side - Content */}
          <Box sx={{ 
            flex: 1, 
            maxWidth: 600, 
            ml: { xs: 0, md: 4 }
          }}>
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                fontSize: { xs: '45px', mb: "15px" },
                fontWeight: 400,
                color: '#333',
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Welcome to Simple Vedas
            </Typography>

            {/* Decorative lines */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                width: 60, 
                height: 2, 
                backgroundColor: '#FFB74D', 
                mb: 0.5 
              }} />
              <Box sx={{ 
                width: 40, 
                height: 2, 
                backgroundColor: '#FFB74D'
              }} />
            </Box>

            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#FFB74D',
                mb: 4
              }}
            >
              Making Spirituality Simple for You
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#555',
                mb: 4,
                textAlign: 'justify'
              }}
            >
              Simple Vedas is to serve as a bridge between the ancient and the modern, 
              between the spiritual and the material, between the philosophy and the 
              practice, so that one can easily understand, appreciate, and apply the 
              Vedic technologies in one's life, bringing to it more meaning and content, 
              and thus enjoy the bliss that we all are really made for.
            </Typography>

            <Button 
              variant="outlined"
              size="large"
              sx={{ 
                borderColor: '#999',
                color: '#666',
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                borderRadius: 1,
                '&:hover': {
                  borderColor: '#666',
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              Read More ≫
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
