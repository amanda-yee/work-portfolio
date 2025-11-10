import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

export default function NavBar() {

  const dateNow = new Date();
  const timeNow = dateNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}); 

  const boxStyle = {
    borderTop: '1px solid #333333',
    borderRight: '1px solid #333333',
    borderBottom: '1px solid #FFFFFF',
    borderLeft: '1px solid #FFFFFF',
    padding: '2px 8px',
  }

  return (
    <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
      <AppBar 
        position="static" 
        sx={{
          backgroundColor: '#cccccc', 
          color: '#000000',
          }}>

        <Toolbar disableGutters
        sx={{
          padding: '5px',
          '&.MuiToolbar-root': {
            minHeight: 0
          }
        }}
        >
          <Typography 
            sx={{ 
              ...boxStyle,
              marginRight: 'auto',
              }}>
            AMANDA YEE
          </Typography>

          <Typography
          sx={{ 
              ...boxStyle
              }}>
            {timeNow}
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
