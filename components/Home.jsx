import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';

const Home = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className="home">
            
            <Grid container spacing={0}>
                <Grid size={1.5}>
                    <div>
                        <img 
                        src="./images/folder.png"
                        alt="Folder icon"
                        />
                        <p>ABOUT</p>
                    </div>

                    <div class="about-window" id="about-window">
                        <div class="about-content">
                            <h2>test</h2>
                            <p>hello world</p>
                        </div>
                        <button id="close-about">Close</button>
                    </div>
                </Grid>

                <Grid size={1.5}>
                    <div>
                        <img 
                        src="./images/folder.png"
                        alt="Folder icon"
                        />
                        <p>PROJECTS</p>
                    </div>
                </Grid>

                <Grid size={6}>
                    <div className="intro-text">
                        <h1>AMANDA YEE</h1>
                        <p>Full-Stack Software Engineer <br></br>
                            Based in Brooklyn, New York
                        </p>
                    </div>
                </Grid>

                <Grid size={1.5}>
                    <div>
                        <img 
                        src="./images/folder.png"
                        alt="Folder icon"
                        />
                        <p>FILM</p>
                    </div>
                </Grid>

                <Grid size={1.5}>
                    {/* <div>
                        <a href="mailto:amandakyee@gmail.com"><EmailIcon /></a> 
                        <Button id="open-about">
                            CONTACT
                        </Button>
                    </div> */}
                    <div>
                        <img 
                        src="./images/folder.png"
                        alt="Folder icon"
                        />
                        <p>CONTACT</p>
                    </div>
                </Grid>
            </Grid>

            {/* <div className="card">
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </div> */}
            
        </div>
    )
}

export default Home