import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import About from './About';
import ProjectHealthTracker from './ProjectHealthTracker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  color: '#000000',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PopUp(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img 
        src="./assets/folder.png"
        alt="Folder icon"
        />
      </Button>

      <p>{props.name}</p>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.name === "about" ? <About /> : null}
          {props.name === "project_health_tracker" ? <ProjectHealthTracker /> : null}
        </Box>
      </Modal>
    </div>
  );
}
