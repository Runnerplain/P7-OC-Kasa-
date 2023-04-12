import React, { useState } from 'react';
import "../../../styles/layout/AppartmentBanner.scss";


const AppartmentBanner = (props) => {   
    const flatPictures = props.pictures;

    const [currentPicture, setCurrentPicture] = useState(0);

    const getClassName = (index) => {
        if (index === currentPicture) return "show"
        return ""  
    }

    const NextPic = () => {
        setCurrentPicture((currentPicture +1) % flatPictures.length); //modulo ? ne pas dépasser l'array
    };

    const PreviousPic = () => {
        const newCurrentPicture = currentPicture -1
        if (newCurrentPicture < 0) {
            setCurrentPicture(flatPictures.length - 1)
            return
        }
        setCurrentPicture((currentPicture -1) % flatPictures.length)
    }


    return (
        <div className="bannerAppartment">
            <button className='btnPrevious' onClick={PreviousPic}>
            <i className='fas fa-chevron-left'></i>
            </button>
            <span className='countCarousel'>{currentPicture + 1} / {flatPictures.length}</span>
            <button className='btnNext' onClick={NextPic}>
            <i className='fas fa-chevron-right'></i>
            </button>
            { flatPictures.map((pic, index) => 
            (<img key={pic} src={pic} alt="" className={ getClassName(index)}>
            </img>))}
        </div>
    );
};

export default AppartmentBanner;