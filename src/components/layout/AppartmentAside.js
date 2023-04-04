import React from 'react';
import "../../styles/layout/AppartmentAside.scss";

const AppartmentAside = () => {
    return (
        <div className="appartment__aside">
                    <div className="appartment__aside__owner">
                        <h3>
                            <span>Alexandre</span>
                            <span>Dumas</span>
                        </h3>
                        <div className="appartment__aside__owner__portrait"></div>
                    </div>
                    <div className="appartment__aside__stars">
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='off'>★</span>
                        <span className='off'>★</span>
                    </div>
                </div>
    );
};

export default AppartmentAside;