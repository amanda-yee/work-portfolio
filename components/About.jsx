import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
const About = () => {

    return (
        <>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description">
            Hi! I'm a Software Engineer based in Brooklyn, with a background in data science. <br></br>
            I am currently gaining experience through volunteer work and am open to full-time opportunities. <br></br><br></br>

            <EmailIcon /> Contact me: <a href="mailto:amandakyee@gmail.com">amandakyee@gmail.com</a>
          </Typography>

        </>
    )
}

export default About