import React from 'react';
import "../../../styles/layout/AppartmentAside.scss";

const AppartmentAside = (props) => {

    const flat = props.flat
    const {name} = flat.host;
    const [firstName, LastName] = name.split(" ");

    return (
        <div className="appartment__aside">
                    <div className="appartment__aside__owner">
                        <h3>
                            <span>{firstName}</span>
                            <span>{LastName}</span>
                        </h3>
                        <div className="appartment__aside__owner__portrait">
                            <img src={flat.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="appartment__aside__stars">

                        { [1, 2, 3, 4, 5].map((number) => 
                        <span key={number} className={props.flat.rating >= number ? 'on' : ''}>★</span>)}

                    </div>
                </div>
    );
};

export default AppartmentAside;