import { Typography } from "@mui/material"
import videoSrc from '../assets/inside_edit_video.mp4';

const ProjectInsideEdit = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography>
                Bespoke portfolio website for an Interior Design business 
            </Typography>
            <Typography>
                HTML, CSS, Javascript, Responsive Design
            </Typography>

            <video width="100%" autoPlay muted>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProjectInsideEdit