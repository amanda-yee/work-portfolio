import { Typography } from "@mui/material"
import videoSrc from '../assets/health_tracker_video.mp4';

const ProjectHealthTracker = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography className="modal-text">
                React, Express, Node, MongoDB, JWT User Authentication
            </Typography>

            <video width="100%" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProjectHealthTracker