import React, { useState } from 'react';
import "../../../styles/layout/DescriptionPan.scss";

const DescriptionPan = (props) => {

    // Function & variable for hidden or show panel
    const [isContentVisible, setIsContentVisible] =useState(true);
    const enableContent = () => {
        setIsContentVisible(!isContentVisible)
    }
    const contentClass = (isContentVisible ? 'visible' : "hidden") + " description";
    const chevronClass = (isContentVisible ? 'fa-chevron-down' : 'fa-chevron-up') + " fas"

    return (        
            <div className="appartment__description">
            <p className='title' onClick={enableContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
                </div>
    );
};

export default DescriptionPan;