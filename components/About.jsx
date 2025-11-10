import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {

    return (
        <>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description">
            Hi! I'm a Software Engineer based in Brooklyn, with a background in data science. <br></br>
            I am currently gaining experience through volunteer work and am open to full-time opportunities. <br></br><br></br>
            
            <div>
              <Typography>Contact me: </Typography>

              <div className='social-icons'>
                <a href="mailto:amandakyee@gmail.com"><EmailIcon /></a>
                <a href="https://www.linkedin.com/in/amanda-yee/"><LinkedInIcon /></a>
                <a href="https://github.com/amanda-yee"><GitHubIcon /></a>
              </div>
            </div>
          </Typography>

        </>
    )
}

export default About