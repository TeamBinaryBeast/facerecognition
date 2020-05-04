import React from 'react';
import Tilt from 'react-tilt';
import Info from './info.png';
import './Owner.css';

const Owner = () => {
    return (
        <div className='ma0 mt0 special_info ata'>
            <div className='main'>
            <a className="button" href="#popup1">
            <Tilt>
            <img style={{paddingTop:'0px'}}
            src={Info} alt='robot-Logo' /> 
            </Tilt>
            </a>
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    
                    <h2>TeamBinaryBeast</h2>
                    <a className="close" href="#top">&times;</a>
                    <div className="content">
                    Contributed by : <br/>
                    Raihan Chowdhury & Sadman Sakib Jisan
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Owner;