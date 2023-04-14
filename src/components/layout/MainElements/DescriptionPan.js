import React, { useState } from 'react';
import "../../../styles/layout/DescriptionPan.scss";



/**
 * 
 * @param {*} props 
 * @returns this is a model for pannel description, using in appartment page & about page
 */

const DescriptionPan = (props) => {

    const [isContentVisible, setIsContentVisible] =useState(false);

    /**
     * @function enableContent result of condition if isContentVisible is not display
     * @return void
     */
    const enableContent = () => {
        setIsContentVisible(!isContentVisible)
    }

    /**
     * @returns ternary operator to put additional class to "description" class if "isContentVisible" is "on" or "off"
     */
    const contentClass = (isContentVisible ? 'visible' : "hidden") + " description";
    /**
     * @returns ternary operator to change icon orientation up or down if "isContentVisible" is "on" or "off"
     */
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