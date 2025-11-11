import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import playLoop from '../utils/playLoop';

export default function NavBar() {

  const dateNow = new Date();
  const timeNow = dateNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}); 

  const boxStyle = {
    borderTop: '1px solid #FFFFFF',
    borderLeft: '1px solid #FFFFFF',
    borderBottom: '1px solid #333333',
    borderRight: '1px solid #333333',
    color: '#000000',
    padding: '2px 8px',
    borderRadius: 0,
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
          padding: '3px',
          '&.MuiToolbar-root': {
            minHeight: 0
          }
        }}
        >
          <Button sx={{ ...boxStyle, marginRight: 'auto'}}>
            AMANDA YEE
          </Button>

          <Typography sx={{ ...boxStyle, marginRight: 'auto' }}>
            FYI - WEBSITE IS WIP
          </Typography>

          <Button sx={{ ...boxStyle }}>
            {timeNow}
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
