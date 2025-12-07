import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import fontLoop from '../utils/fontLoop';

const NavBar = () => {
  
  const dateNow = new Date();
  const timeNow = dateNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}); 

  const boxStyle = {
    borderTop: '1px solid #FFFFFF',
    borderLeft: '1px solid #FFFFFF',
    borderBottom: '1px solid #333333',
    borderRight: '1px solid #333333',
    color: '#000000',
    padding: '0px 4px',
    minWidth: 0,
    borderRadius: 0,
  }

  const boxStyleX = {
    borderTop: '1px solid #FFFFFF',
    borderLeft: '1px solid #FFFFFF',
    borderBottom: '1px solid #333333',
    borderRight: '1px solid #333333',
    color: '#000000',
    padding: '0px 8px',
    minWidth: 0,
    marginLeft: '4px',
    borderRadius: 0,
  }

  return (
    <Box className="nav-bar">
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
          <Button sx={{ ...boxStyle, marginRight: 'auto' }} onClick={fontLoop}>
            AMANDA YEE
          </Button>


          <Button sx={{ ...boxStyle }}>
            {timeNow}
          </Button>
          <Button sx={{ ...boxStyleX }}>
            X
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar