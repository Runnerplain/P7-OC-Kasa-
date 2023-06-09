import React, { useState } from 'react';
import "../../../styles/layout/AppartmentBanner.scss";



/**
 * Its a model for banner section in apartment page. We have carousel system & symbol "chevron" to move back or forward for pictures.
 * @param {*} props 
 * @returns model of Apartment Banner
 */

const AppartmentBanner = (props) => {
    
    const flatPictures = props.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);
    const getClassName = (index) => {
        if (index === currentPicture) return "show"
        return ""
    }

    /**
     * @component arrow function to move banner picture forward
     */

    const NextPic = () => {
        setCurrentPicture((currentPicture + 1) % flatPictures.length); // remainder (modulo) system https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    };

    const PreviousPic = () => {
        const newCurrentPicture = currentPicture - 1
        if (newCurrentPicture < 0) {
            setCurrentPicture(flatPictures.length - 1)
            return
        }
        setCurrentPicture((currentPicture - 1) % flatPictures.length)
    }



    if (flatPictures.length > 1) {
    return (
        <div className="bannerAppartment">
            <button className='btnPrevious' onClick={PreviousPic}>
                <i className='fas fa-chevron-left'></i>
            </button>
            <span className='countCarousel'>{currentPicture + 1} / {flatPictures.length}</span>
            <button className='btnNext' onClick={NextPic}>
                <i className='fas fa-chevron-right'></i>
            </button>
            {flatPictures.map((pic, index) =>
            (<img key={pic} src={pic} alt="" className={getClassName(index)}>
            </img>))}
        </div>
    );
} else {
    return (
        <div className="bannerAppartment">
            <img key={flatPictures[0]} src={flatPictures[0]} alt="" className={getClassName(0)}></img>   {/*Changement post soutenance*/}
        </div>
    );
    }}
export default AppartmentBanner;