import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {

    return (
        <>
          <Typography className="modal-text">
            Hi! I'm Amanda. A software engineer based in Brooklyn NY, with a background in data science. <br></br><br></br>
            
            I'm passionate about designing and building intuitive, user friendly interfaces that blend creativity and functionality. <br></br><br></br>

            Currently, I am gaining experience through volunteer work. I am seeking full-time opportunities where I can contribute to meaningful projects. <br></br><br></br>
            </Typography>

            <Typography className="modal-text">
              Contact me here: 
            </Typography>

            <div className='social-icons'>
              <a href="mailto:amandakyee@gmail.com"><EmailIcon /></a>
              <a href="https://www.linkedin.com/in/amanda-yee/" target="_blank"><LinkedInIcon /></a>
              <a href="https://github.com/amanda-yee" target="_blank"><GitHubIcon /></a>
            </div>
          
        </>
    )
}

export default About