import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ยินดีต้อนรับสู่ระบบ E-Commerce Production 3.0.0 Notify Email
        </Typography>
        <Typography variant="h6"  paragraph>
          คุณได้เข้าสู่ระบบเรียบร้อยแล้ว
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => navigate('/login')}
        >
          ออกจากระบบ
        </Button>
      </Box>
    </Container>
  );
};
