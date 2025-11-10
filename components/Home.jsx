import Grid from '@mui/material/Grid';
import PopUp from './PopUp';
import NavBar from './NavBar';
const Home = () => {
    
    return (
        <div className="home">
            
            <NavBar />

            <div className="home-content">

                <div className="intro-text">
                    <h1>AMANDA YEE</h1>
                    <p>Full-Stack Software Engineer <br></br>
                        Based in Brooklyn, New York
                    </p>
                </div>
                
                <div style={{ position: 'absolute', top: '10%', left: '10%' }}>
                    <PopUp name={"about"}/>
                </div>
                <div style={{ position: 'absolute', top: '70%', left: '30%' }}>
                    <PopUp name={"film_photos"}/>
                </div>
                <div style={{ position: 'absolute', top: '20%', left: '70%' }}>
                    <PopUp name={"project_health_tracker"}/>
                </div>
                <div style={{ position: 'absolute', top: '50%', right: '10%' }}>
                    <PopUp name={"project_interior_design"}/>
                </div>
                   
             </div>
        </div>
    )
}


                {/* <Grid container spacing={2}>
                    <Grid size={2}>
                        <PopUp name={"about"}/>
                    </Grid>
                    <Grid size={2}>
                        <PopUp name={"film"}/>
                    </Grid>

                    <Grid size={4}>
                        <div className="intro-text">
                            <h1>AMANDA YEE</h1>
                            <p>Full-Stack Software Engineer <br></br>
                                Based in Brooklyn, New York
                            </p>
                        </div>
                    </Grid>

                    <Grid size={2}>
                        <PopUp name={"project_health_tracker"}/> 
                    </Grid>
                    <Grid size={2}>
                        <PopUp name={"project_interior_design"}/>
                    </Grid>
                </Grid> */}


export default Home