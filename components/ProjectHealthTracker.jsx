import { Typography } from "@mui/material"

const ProjectHealthTracker = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography>
                React, Express, Node, MongoDB, JWT User Authentication
            </Typography>

            <video width="100%" autoPlay muted>
                <source src="./assets/health_tracker_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProjectHealthTracker