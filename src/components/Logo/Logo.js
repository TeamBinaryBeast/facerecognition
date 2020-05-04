import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import robot from './logo.png';
import Logo1 from './Logo1.png';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
            <img style={{paddingTop:'5px'}}
            src={robot} alt='robot-Logo' />
            <img alt='logo' src={Logo1} />
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;