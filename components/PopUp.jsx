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


const style = {
  //positioning modal in center of screen
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  maxHeight: '70vh',
  overflowY: 'auto', // add scrollbar if content exceeds maxHeight
  color: '#000000',
  bgcolor: 'background.paper',
  border: '2px solid #000000',
  // boxShadow: 24,
  pb: '1rem'
};

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

      <p>{props.name}</p>

      <Modal
        open={open} // this determines whether modal is open or closed
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Box className="window-bar" onClick={handleClose}>
            <CloseIcon className='close'/>
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
