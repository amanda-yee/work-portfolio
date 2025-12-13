import { Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import videoSrc from '../assets/inside_edit_video.mp4';

const ProjectInsideEdit = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="modal-text">
            <Typography >
                Bespoke portfolio for a New York based Interior Design business. <br></br>
            </Typography>

            <div style={{ display: 'flex', gap: '5px' }}>
                <StarIcon />
                <Typography>
                    <a href="https://www.insideedit.com/" target="_blank">Link to website</a>
                </Typography>
                <StarIcon />
            </div>

                {/* <br></br><br></br> */}
            <Typography>
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