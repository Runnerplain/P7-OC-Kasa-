import React from 'react';
import "../../../styles/layout/AppartmentAside.scss";


/**
 * Using for diplay owner section with rating's stars
 * @param {} props
 * @returns Owner's name & photo / with rating's system
 */

const AppartmentAside = (props) => {

    /**
     * @type {Object}
     * @description Represents an object that contains apartment data.
     */
    const flat = props.flat

    /**
     * @type {string}
     * @description Represents the name of apartment's owner
     */
    const {name} = flat.host;
    /**
     * @type {string[]}
     * @description Represents a split for last name & first name to ajust display css alignment
     */
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
                        {/*
                        this code below use map & array of number/range & a className
                        with the rating in db.json. If the number of flat.rating is
                        supp or equal to "number", put a span with className "on" or "empty".
                        Of course, in the scss folder, we find a class "on" with color ajust.
                        */}
                        { [1, 2, 3, 4, 5].map((number) => 
                        <span key={number} className={props.flat.rating >= number ? 'on' : ''}>★</span>)} 

                    </div>
                </div>
    );
};

export default AppartmentAside;