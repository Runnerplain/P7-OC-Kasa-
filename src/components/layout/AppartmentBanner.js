import React, { useState } from 'react';
import "../../styles/layout/AppartmentBanner.scss";


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
            <button onClick={PreviousPic}>Previous</button>
            <button onClick={NextPic}>Next</button>
            { flatPictures.map((pic, index) => 
            (<img key={pic} src={pic} alt="" className={ getClassName(index)}>
            </img>))}
        </div>
    );
};

export default AppartmentBanner;