import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import PopUp from './PopUp';

const Home = () => {
    
    return (
        <div className="home">
            
            <Grid container spacing={0}>
                <Grid size={1.5}>
                   
                    <PopUp name={"about"}/>
                    
                </Grid>

                <Grid size={1.5}>
                 
                    <PopUp name={"project_health_tracker"}/>
                        
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
                        src="./assets/folder.png"
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
                        src="./assets/folder.png"
                        alt="Folder icon"
                        />
                        <p>CONTACT</p>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Home