import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img className='brain' src={brain}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;