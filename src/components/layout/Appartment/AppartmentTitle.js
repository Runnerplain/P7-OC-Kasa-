import React from 'react';
import "../../../styles/layout/AppartmentTitle.scss";


const AppartmentTitle = (props) => {
    return (
        <div className='appartment__title'>
            <h1>{props.flat.title}</h1>
            <h2>{props.flat.location}</h2>
            <div className="appartment__title__tags">
                {props.flat.tags.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
        </div>
    );
};

export default AppartmentTitle;