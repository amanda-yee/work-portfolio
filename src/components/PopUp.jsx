import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import About from './About';
import ProjectHealthTracker from './ProjectHealthTracker';
import ProjectInsideEdit from './ProjectInsideEdit';
import Film from './Film';

import imageSrc from '../assets/folder.png';


// const style = {
//   //positioning modal in center of screen
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   minWidth: '100vw',
//   width: '50%',
//   maxHeight: '70vh',
//   overflowY: 'auto', // add scrollbar if content exceeds maxHeight
//   color: '#000000',
//   bgcolor: 'background.paper',
//   border: '2px solid #000000',
//   // boxShadow: 24,
//   pb: '1rem'
// };

const boxStyle = {
    borderTop: '1px solid #FFFFFF',
    borderLeft: '1px solid #FFFFFF',
    borderBottom: '1px solid #333333',
    borderRight: '1px solid #333333',
    color: '#000000',
    padding: '2px 2px',
    minWidth: 0, 
    borderRadius: 0,
}

export default function PopUp(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="popup">
      <Typography onClick={handleOpen}>
        <img className="folder-icon"
        src={imageSrc}
        alt="Folder icon"
        width="50"
        />
      </Typography>

      <div>{props.name}</div>

      <Modal
        open={open} // this determines whether modal is open or closed
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box className="modal-style">

          {/* top bar of popup window */}
          <Box className="window-bar" onClick={handleClose}>
            <Typography sx={{ marginRight: 'auto', marginLeft: '20px' }}>
              {props.name}
            </Typography>
            <Button sx={{ ...boxStyle }} className="btn-close">
              <CloseIcon />
            </Button>
          </Box>

          {/* render content in popup based on name */}
          <div className="window-content"> 
            {props.name === "about" ? <About /> : null}
          </div>

          <div className="window-content"> 
            {props.name === "project_health_tracker" ? <ProjectHealthTracker /> : null}
          </div>

          <div className="window-content"> 
            {props.name === "project_interior_design" ? <ProjectInsideEdit /> : null}
          </div>

          <div className="window-content"> 
            {props.name === "film_photos" ? <Film /> : null}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
