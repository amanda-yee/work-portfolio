import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {

  const dateNow = new Date();
  const timeNow = dateNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}); 

  return (
    <Box sx={{ flexGrow: 1 }}>
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
            // variant="h8" component="div" 
            sx={{ 
              borderTop: '1px solid #333333',
              borderRight: '1px solid #333333',
              borderBottom: '1px solid #FFFFFF',
              borderLeft: '1px solid #FFFFFF',
              padding: '5px 10px',
              marginRight: 'auto',
              }}>
            AMANDA YEE
          </Typography>

          <Typography
          sx={{ 
              borderTop: '1px solid #333333',
              borderRight: '1px solid #333333',
              borderBottom: '1px solid #FFFFFF',
              borderLeft: '1px solid #FFFFFF',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
              padding: '5px 10px',
              }}>
            {timeNow}
          </Typography>
        </Toolbar>

      </AppBar>
    </Box>
  );
}
