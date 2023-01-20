import { Link } from 'react-router-dom';

import image from './image-asset.jpeg';


export const NotFound = () => {
    return(
        <div>
            <h2>Opsss! This page doesn&apos;t exist</h2>
            <img src={image} alt="not found" style={{ width: 200 }} />
            <Link to="">
                Open home page
            </Link>
        </div>
        
    )
}