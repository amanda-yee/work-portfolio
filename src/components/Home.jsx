import { useEffect } from 'react';
import PopUp from './PopUp';
import NavBar from './NavBar';
import fontLoop from '../utils/fontLoop';

const Home = () => {
    
    // run font loop when Home page mounts 
    useEffect(() => {
        fontLoop();
    }, [])

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
                
                <div className="about-folder">
                    <PopUp name={"about"}/>
                </div>
                <div className="film-folder">
                    <PopUp name={"film_photos"}/>
                </div>
                <div className="proj-health-folder">
                    <PopUp name={"project_health_tracker"}/>
                </div>
                <div className="proj-interior-folder">
                    <PopUp name={"project_interior_design"}/>
                </div>
                   
             </div>
        </div>
    )
}

export default Home