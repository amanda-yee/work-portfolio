import { Typography } from '@mui/material';
import corner from '../assets/corner.jpg'
import hewes from '../assets/hewes.jpg';
import mott from '../assets/mott.jpg';
import kl from '../assets/kl.jpg';
import tulum from '../assets/tulum.jpg';
import moma from '../assets/moma.jpg';

const Film = () => {

    const filmArray = [
        {src: corner, caption: "SoHo, Manhattan"},
        {src: kl, caption: "Kuala Lumpur, Malaysia"},
        {src: tulum, caption: "Tulum, Mexico"},
        {src: hewes, caption: "Hewes Station, Brooklyn"},
        {src: moma, caption: "Moma Museum, New York"},
        {src: mott, caption: "Chinatown, Manhattan"}
    ];

    const photos = filmArray.map((film, index) => {

        return <div className="film-photo" key={index}>
            <img src={film.src} alt="film" width="80%"/> 
            
            <Typography className="modal-text">
                {film.caption}
            </Typography>
            </div>
    
    })

    return (
        <>  
            {photos}
        </>
    )
}

export default Film