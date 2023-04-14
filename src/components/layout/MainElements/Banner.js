import React from 'react';
import "../../../styles/layout/HomeBanner.scss"



/**
 * 
 * @returns banner for homepage
 * @description Implemented with background-image in css in webp format
 */
function Banner() {
    return (
        <div className='banner'>
            <h1><span>Chez vous,</span> <span>partout et ailleurs</span></h1>
        </div>
    );
}

export default Banner;