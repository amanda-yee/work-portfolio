import { Typography } from "@mui/material"
import videoSrc from '../assets/inside_edit_video.mp4';

const ProjectInsideEdit = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography className="modal-text">
                Bespoke portfolio for a New York based Interior Design business. <br></br><br></br>
           
                HTML, CSS, Javascript, Responsive Design, Figma
            </Typography>

            <video width="100%" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProjectInsideEdit