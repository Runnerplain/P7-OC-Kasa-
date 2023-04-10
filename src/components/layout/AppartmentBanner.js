import React from 'react';
import "../../styles/layout/AppartmentBanner.scss";


const AppartmentBanner = (props) => {   
    const flatPictures = props.pictures;
    return (
        <div className="bannerAppartment">
            
            { flatPictures.map((pic) => <img key={pic} src={pic} alt="">
            </img>)}
        </div>
    );
};

export default AppartmentBanner;